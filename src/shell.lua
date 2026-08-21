screenWidth = screenwidth()
screenHeight = screenheight()
fontHeight = 16

-- UTILS
function subChar(s, start, e)
    local counter = 1
    local r = ""
    for p, c in utf8.codes(s) do
        if counter >= start and counter < e then
            r = r .. utf8.char(c)
        end
        counter = counter + 1
    end
    return r
end

function insertChar(s, i, t)
    local r = ""
    local counter = 1
    for p, c in utf8.codes(s) do
        if counter == i then
            r = r .. t
        end
        r = r .. utf8.char(c)
        counter = counter + 1
    end
    if counter == i then
        r = r .. t
    end
    return r
end

function split(s, delim)
	local stringTable = {}
	local lastIndex = 1
	for i=1,string.len(s) do
		local currentlyContains = true
		for j=1,string.len(delim) do
			if (string.sub(s, i+j-1, i+j-1) ~= string.sub(delim, j, j)) then
				currentlyContains = false
			end
		end
		if (currentlyContains and string.len(string.sub(s, lastIndex, i-1)) > 0) then
			stringTable[#stringTable+1] = string.sub(s, lastIndex, i-1)
			lastIndex = i+string.len(delim)
		end
	end
	stringTable[#stringTable+1] = string.sub(s, lastIndex, #s)
	return stringTable
end

-- PROCESS MANAGEMENT
Processes = {}
windows = Processes -- compatibility with skk.lua

Shell = {
    line = "",
    history = {},
    cmdHistory = {},
    cmdHistoryIdx = 0,
    alldirty = true,
    -- Reserved: Title (1), Prompt (1), Heap (1), SKK (1) = 4 lines
    maxHistory = math.floor((screenHeight - fontHeight * 4) / fontHeight)
}

function printLog(msg)
    local lines = split(msg, "\n")
    for _, l in ipairs(lines) do
        table.insert(Shell.history, l)
    end
    while #Shell.history > Shell.maxHistory do
        table.remove(Shell.history, 1)
    end
end

function Shell:draw(setPos)
    -- clear background (except title and skk status bar)
    color(255,255,255)
    fillrect(0, fontHeight, screenWidth, screenHeight - fontHeight * 2)
    
    color(0,0,0)
    local y = fontHeight
    for i=1, #self.history do
        text(self.history[i], 0, y)
        y = y + fontHeight
    end

    local promptStr = "> " .. self.line
    text(promptStr, 0, y)

    -- cursor
    local w = textwidth(promptStr)
    fillrect(w, y, 2, fontHeight)

    -- heap info
    color(255,255,255)
    fillrect(0, screenHeight - fontHeight * 2, screenWidth, fontHeight)
    color(0,0,0)
    text("Heap: " .. getfreeheap(), 0, screenHeight - fontHeight * 2)

    if setPos then
        setPos(w, y)
    end
end

function Shell:keydown(k, c, ctrl)
    debug("shell keydown: " .. k .. "," .. c)
    local key = c
    if k == 13 then -- Enter
        if self.line ~= "" then
            table.insert(self.cmdHistory, 1, self.line)
            if #self.cmdHistory > 50 then table.remove(self.cmdHistory) end
        end
        self.cmdHistoryIdx = 0
        self:exec(self.line)
        self.line = ""
    elseif k == 8 then -- Backspace
        self.line = subChar(self.line, 1, utf8.len(self.line))
    elseif k == 38 then -- ArrowUp
        if #self.cmdHistory > 0 then
            self.cmdHistoryIdx = self.cmdHistoryIdx + 1
            if self.cmdHistoryIdx > #self.cmdHistory then
                self.cmdHistoryIdx = #self.cmdHistory
            end
            self.line = self.cmdHistory[self.cmdHistoryIdx]
        end
    elseif k == 40 then -- ArrowDown
        if self.cmdHistoryIdx > 0 then
            self.cmdHistoryIdx = self.cmdHistoryIdx - 1
            if self.cmdHistoryIdx == 0 then
                self.line = ""
            else
                self.line = self.cmdHistory[self.cmdHistoryIdx]
            end
        end
    elseif k == 37 then -- ArrowLeft
    elseif k == 39 then -- ArrowRight
    elseif string.len(key) == 1 or utf8.len(key) == 1 then
        self.line = self.line .. key
        self.cmdHistoryIdx = 0
    end
    self:draw(setPos)
end

function pushProcess(p)
    table.insert(Processes, p)
    if p.draw then p:draw(setPos) end
end

function popProcess()
    table.remove(Processes)
    local top = Processes[#Processes]
    if top then
        if top.alldirty ~= nil then top.alldirty = true end
        if top.draw then top:draw(setPos) end
    end
end

function draw(sp)
    local top = Processes[#Processes]
    if top and top.draw then
        top:draw(sp)
    end
end

function keydown(k, c, ctrl)
    local top = Processes[#Processes]
    if top and top.keydown then
        top:keydown(k, c, ctrl)
    end
end

-- LOADING LOGIC
local function resolvePath(filename)
    if not string.find(filename, "^/") then
        filename = "/" .. filename
    end
    debug("resolvePath: " .. filename)
    local content = readfile(filename)
    if not content and not string.find(filename, "%.lua$") then
        local alt = filename .. ".lua"
        debug("resolvePath: " .. alt)
        content = readfile(alt)
        if content then filename = alt end
    end
    return filename, content
end

local function makeSandbox(args, is_pipe_stage, is_last_pipe)
    local env = {
        arg = args,
        gui = {},
        exit = popProcess,
        print = function(...)
            local msg = table.concat({...}, "\t")
            if is_pipe_stage and not is_last_pipe then
                coroutine.yield(msg)
            else
                printLog(msg)
            end
        end
    }
    return setmetatable(env, { __index = _G })
end

function run(filename, ...)
    local path, content = resolvePath(filename)
    if not content then
        printLog("File not found: " .. filename)
        return
    end

    local env = makeSandbox({...}, false)
    local f, err = load(content, path, "t", env)
    if f then
        local status, result = pcall(f)
        if not status then
            printLog("Error: " .. result)
        elseif rawget(env, "keydown") or rawget(env, "draw") then
            pushProcess(env)
        end
    else
        printLog("Load error: " .. err)
    end
end

local function run_pipe(commands)
    local coroutines = {}
    for i, cmd_str in ipairs(commands) do
        local parts = split(cmd_str, " ")
        local filename = parts[1]
        local args = {}
        for j=2, #parts do table.insert(args, parts[j]) end

        local path, content = resolvePath(filename)
        if not content then
            printLog("Command not found: " .. filename)
            return
        end

        local env = makeSandbox(args, true, i == #commands)
        local f, err = load(content, path, "t", env)
        if not f then
            printLog("Load error in " .. path .. ": " .. err)
            return
        end
        table.insert(coroutines, coroutine.create(f))
    end

    local function drive(data)
        local current_data = data
        for i=2, #coroutines do
            local co = coroutines[i]
            if coroutine.status(co) == "dead" then return end
            local status, result = coroutine.resume(co, current_data)
            if not status then
                printLog("Error in stage " .. i .. ": " .. result)
                return
            end
            current_data = result
            if not current_data then break end
        end
    end

    for i, co in ipairs(coroutines) do
        local status, result = coroutine.resume(co)
        if not status then
            printLog("Init error in stage " .. i .. ": " .. result)
            return
        end
    end

    local first_co = coroutines[1]
    while coroutine.status(first_co) ~= "dead" do
        local status, result = coroutine.resume(first_co)
        if not status then
            printLog("Error in source: " .. result)
            break
        end
        if result then drive(result) end
    end
    drive(nil) -- EOF
end

-- COMMANDS
Commands = {}

Commands["ls"] = function(args)
    run("/ls.lua")
end

Commands["clear"] = function(args)
    Shell.history = {}
end

Commands["edit"] = function(args)
    if #args > 0 then
        run("/edit.lua", args[1])
    else
        printLog("edit: no filename specified")
    end
end

Commands["switch"] = function(args)
    if #args > 0 then
        sys_run(args[1])
    else
        printLog("switch: no filename specified")
    end
end

Commands["off"] = function(args)
    if backlight then backlight(false) end
end

Commands["on"] = function(args)
    if backlight then backlight(true) end
end

Commands["run"] = function(args)
    if #args > 0 then
        local cmdArgs = {}
        for i=2, #args do table.insert(cmdArgs, args[i]) end
        run(args[1], table.unpack(cmdArgs))
    else
        printLog("run: no filename specified")
    end
end

Commands["help"] = function(args)
    printLog("Built-in commands:")
    local builtins = {}
    for k in pairs(Commands) do table.insert(builtins, k) end
    table.sort(builtins)
    printLog("  " .. table.concat(builtins, ", "))
    
    printLog("External scripts:")
    local files = getfiles()
    local scripts = {}
    for _, f in ipairs(files) do
        if string.find(f, "%.lua$") then
            table.insert(scripts, f)
        end
    end
    table.sort(scripts)
    printLog("  " .. table.concat(scripts, ", "))
end

function Shell:exec(line)
    printLog("> " .. line)
    if string.find(line, "|") then
        local cmds = split(line, "|")
        for i, v in ipairs(cmds) do
            cmds[i] = v:match("^%s*(.-)%s*$")
        end
        run_pipe(cmds)
        return
    end

    local parts = split(line, " ")
    local cmdName = parts[1]
    local args = {}
    for i=2, #parts do table.insert(args, parts[i]) end

    if Commands[cmdName] then
        Commands[cmdName](args)
    else
        run(cmdName, table.unpack(args))
    end
end

table.insert(Processes, Shell)

require("skk")
imMode = M_HAN

color(255,255,255)
fillrect(0, 0, screenWidth, screenHeight)
color(100,100,255)
fillrect(0, 0, screenWidth, fontHeight)
color(150,150,255)
fillrect(2, 2, screenWidth - 4, fontHeight - 4)
color(255,255,255)
text("Shell", fontHeight, 0)
color(0,0,255)
fillrect(2,2,fontHeight-4,fontHeight-4)
color(255,255,255)
fillrect(3,3,fontHeight-6,fontHeight-6)

draw(setPos)

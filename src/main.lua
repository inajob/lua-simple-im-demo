-- init
screenWidth = screenwidth()
screenHeight = screenheight()
fontHeight = 16+2

debug("== init ==")

require("alert")
require("prompt")
json = require "json"

function url_encode(str)
    if str == nil then return "" end
    str = tostring(str)
    str = str:gsub("\n", "\r\n")
    str = str:gsub("([^%w%-%.%_%~])", function(c)
        return string.format("%%%02X", string.byte(c))
    end)
    return str
end

Editor = {}
Editor.new = function()
    local obj = {}
    obj.lines = {}
    obj.lines[#obj.lines + 1] = {value="Hello World", dirty=true}
    obj.lines[#obj.lines + 1] = {value="日本語 テスト", dirty=true}
    obj.x = 1
    obj.y = 1
    obj.scrollY = 0
    obj.alldirty = true
    obj.getText = function(self)
        local ls = {}
        for i, l in pairs(self.lines) do
            ls[#ls + 1] = l.value
        end
        return table.concat(ls, "\n")
    end
    obj.loadText = function(self, text)
        self.lines = {}
        debug("loadText")
        for line in text:gmatch("[^\n]+") do
            debug("load: " .. line)
            self.lines[#self.lines + 1] = {value = line, dirty = true}
        end
        if #self.lines == 0 then
            self.lines[1] = {value = "", dirty = true}
        end
        self.alldirty = true
    end
    obj.draw = function(self, setPos)
        local px = 0
        local py = 0
        local cx = 0
        local cy = 0
        local offset = 10
        if self.alldirty then
            color(255,255,255)
            fillrect(0,0,screenWidth,screenHeight)
        end
        color(0,0,0)
        for i, l in pairs(self.lines) do
            if i < self.scrollY or i - self.scrollY > screenHeight/fontHeight then
                goto skip
            end
            px = 0
            local j = 1
            if l["dirty"] == false and i ~= self.y and not(self.alldirty) then
                goto continue
            end
            l["dirty"] = false
            color(255,255,255)
            fillrect(0,py,screenWidth,fontHeight)
            if i == #self.lines then
                fillrect(0,py + fontHeight,screenWidth,fontHeight)
            end
            color(0,0,255)
            fillrect(0, py, 3, fontHeight)
            for p, c in utf8.codes(l["value"]) do
                local uc = utf8.char(c)
                if i == self.y and j == self.x then
                    color(0,0,0)
                    fillrect(offset + px, py, 1, fontHeight - 1)
                    cx = px
                    cy = py
                end
                if offset + px + textwidth(uc) > screenWidth then
                    px = 0
                    py = py + fontHeight
                    color(255,255,255)
                    fillrect(0,py,screenWidth,fontHeight)
                end
                color(0,0,0)
                text(uc, offset + px, py)
                px = px + textwidth(uc)
                j = j + 1
            end
            if i == self.y and j == self.x then
                color(0,0,0)
                fillrect(offset + px, py, 1, fontHeight - 1)
                cx = px
                cy = py
            end
            ::continue::
            py = py + fontHeight
            ::skip::
        end
        if self.alldirty then self.alldirty = false end
        if setPos then setPos(offset + cx, cy) end
    end
    obj.keydown = function(self, k, c, ctrl)
        debug("keydown: " .. k .. "," .. c)
        local key = c
        if k == 13 then -- Enter
            local line = self.lines[self.y]["value"]
            self.lines[self.y]["value"] = subChar(line, 1, self.x)
            self.lines[self.y]["dirty"] = true
            table.insert(self.lines, self.y + 1, {
                value = subChar(line, self.x, utf8.len(line) + 1),
                dirty=true
            })
            self.x = 1
            self.y = self.y + 1
            self.alldirty = true
        elseif k == 8 then -- Backspace
            local line = self.lines[self.y]["value"]
            if self.x == 1 then
                if self.y > 1 then
                    local px = utf8.len(self.lines[self.y - 1]["value"]) + 1
                    self.lines[self.y - 1]["value"] = self.lines[self.y - 1]["value"] .. self.lines[self.y]["value"]
                    table.remove(self.lines, self.y)
                    self.y = self.y - 1
                    self.x = px
                    self.alldirty = true
                end
            else
                self.lines[self.y]["value"] = subChar(line, 1, self.x - 1) .. subChar(line, self.x, utf8.len(line) + 1)
                self.x = self.x - 1
                self.lines[self.y]["dirty"] = true
            end
        elseif k == 37 then -- ArrowLeft
            if self.x > 1 then self.x = self.x - 1 end
        elseif k == 39 then -- ArrowRight
            if self.x <= utf8.len(self.lines[self.y]["value"]) then self.x = self.x + 1 end
        elseif k == 38 then -- ArrowUp
            if self.y > 1 then
                self.lines[self.y]["dirty"] = true
                self.y = self.y - 1
                if self.x > utf8.len(self.lines[self.y]["value"]) + 1 then
                    self.x = utf8.len(self.lines[self.y]["value"]) + 1
                end
            end
        elseif k == 40 then -- ArrowDown
            if self.y < #self.lines then
                self.lines[self.y]["dirty"] = true
                self.y = self.y + 1
                if self.x > utf8.len(self.lines[self.y]["value"]) + 1 then
                    self.x = utf8.len(self.lines[self.y]["value"]) + 1
                end
            end
        elseif key == "q" and ctrl then
            exit()
        elseif key == "f" and ctrl then
            fetch("ja.wikipedia.org", "/api/rest_v1/page/summary/" .. url_encode(self.lines[self.y]["value"]), function(out)
                local obj = json.decode(out)
                showAlert("fetch:" .. (obj["extract"] or "no summary"))            
            end)
            return
        elseif key == "d" and ctrl then
            local files = getfiles()
            showAlert("files:" .. table.concat(files, "\n"))
            return
        elseif key == "l" and ctrl then
            showPrompt("load...", function(fileName)
                local text = readfile(fileName)
                if text == nil then
                    showAlert("Load Error! " .. fileName)
                else
                    self:loadText(text)
                end
            end)
            return
        elseif key == "s" and ctrl then
            showPrompt("Save...", function(fileName)
                local b = self:getText()
                savefile(fileName, b)
                showAlert("SAVE to " .. fileName)
            end)
            return
        elseif string.len(key) == 1 or utf8.len(key) == 1 then
            local line = self.lines[self.y]
            self.lines[self.y]["value"] = insertChar(line["value"], self.x, key)
            self.x = self.x + 1
            self.lines[self.y]["dirty"] = true
        end
    
        if cy <= 0 and self.scrollY > 0 then
            self.scrollY = self.scrollY - 1
            self.alldirty = true
        end
        if cy >= screenHeight - fontHeight * 2 then
            self.scrollY = self.scrollY + 1
            self.alldirty = true
        end
        self:draw(setPos)
    end
    return obj
end

editor = Editor.new()
-- Initial load if arg is provided
if arg and arg[1] then
    local text = readfile(arg[1])
    if text then editor:loadText(text) end
end

function showAlert(msg)
    local alert = Alert.new(msg, function()
        popProcess()
    end)
    pushProcess(alert)
end

function showPrompt(msg, handler)
    local prompt = Prompt.new(
        msg,
        function(text)
            popProcess()
            handler(text)
        end,
        function()
            popProcess()
        end
    )
    pushProcess(prompt)
end

-- Export to sandbox
function draw(self, sp)
    if self.alldirty then
        editor.alldirty = true
        self.alldirty = false
    end
    editor:draw(sp)
end
function keydown(self, k, c, ctrl) editor:keydown(k, c, ctrl) end

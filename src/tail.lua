local n = 10
local filename = nil

local i = 1
while i <= #arg do
    if arg[i] == "-n" and arg[i+1] then
        n = tonumber(arg[i+1]) or 10
        i = i + 2
    elseif not string.find(arg[i], "^-") then
        filename = arg[i]
        i = i + 1
    else
        i = i + 1
    end
end

local buffer = {}
if filename then
    if not string.find(filename, "^/") then filename = "/" .. filename end
    local content = readfile(filename)
    if content then
        buffer = split(content, "\n")
    else
        print("tail: " .. filename .. ": No such file")
        return
    end
else
    -- Pipe input
    while true do
        local line = coroutine.yield()
        if line == nil then break end
        table.insert(buffer, line)
    end
end

local start = #buffer - n + 1
if start < 1 then start = 1 end
for i=start, #buffer do
    print(buffer[i])
end

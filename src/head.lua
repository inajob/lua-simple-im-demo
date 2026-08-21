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

local count = 0
if filename then
    if not string.find(filename, "^/") then filename = "/" .. filename end
    local content = readfile(filename)
    if content then
        local lines = split(content, "\n")
        for _, l in ipairs(lines) do
            if count >= n then break end
            print(l)
            count = count + 1
        end
    else
        print("head: " .. filename .. ": No such file")
    end
else
    -- Pipe input
    while count < n do
        local line = coroutine.yield()
        if line == nil then break end
        print(line)
        count = count + 1
    end
end

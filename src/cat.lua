local filename = arg[1]
if filename then
    if not string.find(filename, "^/") then filename = "/" .. filename end
    local content = readfile(filename)
    if content then
        local lines = split(content, "\n")
        for _, l in ipairs(lines) do
            print(l)
        end
    else
        print("cat: " .. filename .. ": No such file")
    end
else
    -- No filename, read from pipe
    while true do
        local line = coroutine.yield()
        if line == nil then break end
        print(line)
    end
end

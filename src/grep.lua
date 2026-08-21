local pattern = arg[1]
if not pattern then
    print("Usage: grep <pattern>")
    return
end

while true do
    local line = coroutine.yield()
    if line == nil then break end
    if string.find(line, pattern) then
        print(line)
    end
end

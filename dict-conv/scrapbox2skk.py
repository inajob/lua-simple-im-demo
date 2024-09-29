import json

out = []
obj = None
with open("gictionary.json",encoding="utf8") as f:
    obj = json.load(f)

#print(obj)
d = {}
for p in obj["pages"]:
    value = p["title"]
    yomi = p["lines"][1].split(" ")[0]
    if yomi == "":
        continue
    if yomi.find("/") != -1:
        continue
    d.setdefault(yomi, []).append(value)

with open('mydict.txt', 'w', encoding="utf8") as f:
    for k, v in d.items():
        f.write(k + " /" + ("/".join(v)) + "/\n")
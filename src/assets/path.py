from os import listdir

data = list(map(lambda x : "@/assets/item/" + x,listdir("item")))
with open("path.txt","w") as f :
    for text in data:
        f.write(text+'\n')
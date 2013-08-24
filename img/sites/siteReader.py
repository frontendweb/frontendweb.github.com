my_file = open("sites.txt", "r")
my_list = my_file.readlines()
my_file.close()

f = open("output.txt", "w")

stringVal = ""

for item in my_list:
	formattedItem = str(item).rstrip('\n')
	url = formattedItem.replace('http---','http://').strip('-.png')
	name = formattedItem.replace('http---','').replace('-.png','')
	stringVal+=("{url: \""+url+"\", src:\"img/sites/"+formattedItem+"\", name: \""+name+"\"},")

f.write(stringVal)
f.close()
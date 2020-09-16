from django.shortcuts import render
from django.http import HttpResponse,HttpResponseRedirect
from .models import ToDoList,Items
from .form import CreateNewList
# Create your views here.

	#items = ls.items_set.get(id = id)
	# return HttpResponse("<h1>%s</h1><br></br><p>%s</br>"%(ls.name,items.text))
def index(response,id):
	ls = ToDoList.objects.get(id=id)

	# {"save":["save"], "c1":["clicked"]}
	if response.method == "POST":
		print(response.POST)
		if response.POST.get("save"):
			# print("hello")
			for item in ls.items_set.all():
				if response.POST.get("c" +str(item.id)) == "clicked":
					item.complete = True
				else :
					item.complete = False
				item.save()
		elif response.POST.get("newItem"):
			# print("Hey")
			txt = response.POST.get("new")
			if len(txt)>2:
				ls.items_set.create(text=txt,complete=False)
			else:
				print("invalid")

	return render(response,"main/list.html",{"ls":ls})

# def index_name(response,name):
# 	ls = ToDoList.objects.get(name = name)
# 	return HttpResponse("<h1>%s</h1>"%ls.name)

def home(response):
	return render(response,"main/home.html",{})

def create(response):
	print(response.method)
	if response.method == "POST":
		print("hello")
		form = CreateNewList(response.POST)
		if form.is_valid():
			n = form.cleaned_data["name"]
			t = ToDoList(name=n)
			t.save()
			response.user.todolist.add(t)
		return HttpResponseRedirect("/%i" %t.id)
	else:
		print("Hi")
		form = CreateNewList()
	return render(response,"main/create.html",{"form":form})

def view(response):
	return render(response,"main/view.html",{})
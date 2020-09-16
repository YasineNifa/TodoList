from django.contrib import admin
from .models import ToDoList, Items
# Register your models here.

admin.site.register(ToDoList)
admin.site.register(Items)
from django.contrib import admin

# Register your models here.
from .models import Group, Contact, Inbox

admin.site.register(Group)
admin.site.register(Contact)
admin.site.register(Inbox)
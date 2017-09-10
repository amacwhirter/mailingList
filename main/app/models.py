from django.db import models

# Create your models here.


class Group(models.Model):
    name = models.CharField(max_length=300)
    location = models.CharField(max_length=300)

    def __str__(self):
        return self.name

class Contact(models.Model):
    name = models.CharField(max_length=300)
    email = models.EmailField(max_length=254)
    group = models.ForeignKey(Group, null=True, blank=True, related_name='groups')

    def __str__(self):
        return self.name

class Inbox(models.Model):
    recipent = models.CharField(max_length=300)
    message = models.CharField(max_length=300)
    subject = models.CharField(max_length=300)
    date = models.DateField()

    def __str__(self):
        return self.name


# 'ENGINE': 'django.db.backends.mysql',
#         'NAME': 'app',
#         'USER':'root',
#         'PASSWORD':'Septembre1',
#         'HOST':'localhost',
#         'PORT':''

from django.shortcuts import render
from django.http import HttpResponse, HttpResponseRedirect
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail, BadHeaderError
from django.db.models import Q
from django.contrib.auth.models import *
from rest_framework import viewsets
from rest_framework.decorators import api_view
from rest_framework.response import Response
from app.serializers import *
from app.models import *
import json
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail


# Create your views here.

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """

    queryset = Group.objects.all()
    serializer_class = GroupSerializer


class ContactViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

class InboxViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Inbox.objects.all()
    serializer_class = InboxSerializer


@csrf_exempt
def send_email(request):
    print(request.POST)
    subject = request.POST.get('subject', '')
    message = request.POST.get('message', '')
    group = request.POST.get('group',int())
    contacts = Contact.objects.filter(Q(group__id=group) ).distinct()
    recipients = list(i for i in contacts.values_list('email', flat=True) if bool(i))
    print(recipients)
    if subject and message and recipients:
        try:
            send_mail(subject, message, 'noreply@admin.com', recipients, fail_silently=False)
        except BadHeaderError:
            return HttpResponse('Invalid header found.')
        return HttpResponseRedirect('http://localhost:8080/inbox')
    else:
        return HttpResponse('Make sure all fields are entered and valid.')


@csrf_exempt
def create_contact(request):
    print(request.POST)
    try:
        if request.method == 'POST':
            contact_name = request.POST['name']
            contact_email = request.POST['email']
            contact_group = request.POST['group']
            print(contact_name)
            print(contact_email)
            print(contact_group)
            newContact = Contact(name=contact_name, email=contact_email)
            #newContact.group_id = Group.objects.filter(pk=contact_group).values_list('id', flat=True)[0]
            newContact.group_id = contact_group
            newContact.save()
    except Group.DoesNotExist:
        pass
    return HttpResponse("hello")

def home(request):
    # message = ''
    return HttpResponse("Welcome to America. It is really great!!")

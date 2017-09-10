from django.contrib.auth.models import User
from app.models import Group, Contact, Inbox
from rest_framework import serializers


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'email', 'groups')


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('__all__')



class ContactSerializer(serializers.ModelSerializer):
    group = GroupSerializer(required=False, allow_null=True)
    class Meta:
        model = Contact
        fields = ('__all__')



class InboxSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inbox
        fields = ('name', 'email', 'subject', 'date')

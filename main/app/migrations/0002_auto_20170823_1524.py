# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-08-23 15:24
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0001_initial'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='Contacts',
            new_name='Contact',
        ),
        migrations.RenameModel(
            old_name='Groups',
            new_name='Group',
        ),
    ]

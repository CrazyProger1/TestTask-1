# Generated by Django 4.2.6 on 2023-10-19 11:29

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0003_group_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='user',
        ),
    ]
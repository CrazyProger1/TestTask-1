# Generated by Django 4.2.6 on 2023-10-18 15:18

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Group',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255, verbose_name='Group name')),
                ('description', models.CharField(max_length=1000, verbose_name='Group description')),
            ],
        ),
    ]

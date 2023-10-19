from django.db import models


class Group(models.Model):
    name = models.CharField(max_length=255, verbose_name='Group name')
    description = models.CharField(max_length=1000, verbose_name='Group description')

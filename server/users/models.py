from django.contrib.auth.models import User
from django.db import models

from .constants import (
    GROUP_NAME_LENGTH,
    GROUP_DESCRIPTION_LENGTH
)


class Group(models.Model):
    name = models.CharField(
        max_length=GROUP_NAME_LENGTH,
        verbose_name='Group name',
        null=False,
        unique=True
    )
    description = models.CharField(
        max_length=GROUP_DESCRIPTION_LENGTH,
        verbose_name='Group description',
        null=False
    )

    # ManyToMany is used to be able to add multiple groups to a user in the future.
    users = models.ManyToManyField(User, related_name='group_set', blank=True)

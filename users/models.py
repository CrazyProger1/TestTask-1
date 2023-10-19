from django.db import models
from django.contrib.auth.models import User

from .constants import (
    GROUP_NAME_LENGTH,
    GROUP_DESCRIPTION_LENGTH
)


class Group(models.Model):
    name = models.CharField(
        max_length=GROUP_NAME_LENGTH,
        verbose_name='Group name'
    )
    description = models.CharField(
        max_length=GROUP_DESCRIPTION_LENGTH,
        verbose_name='Group description'
    )


class UserGroup(models.Model):
    user = models.ForeignKey(User, models.CASCADE)
    group = models.ForeignKey(Group, models.CASCADE)

    class Meta:
        unique_together = [
            ('user', 'group'),
        ]

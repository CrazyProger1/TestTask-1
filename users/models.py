from django.db import models

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




from users.models import (
    Group,
    User
)


def get_all_users():
    return User.objects.all()


def get_all_groups():
    return Group.objects.all()

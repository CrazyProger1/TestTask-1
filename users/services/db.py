from django.contrib.auth.models import User

from users.models import Group


def get_all_users():
    return User.objects.all()


def get_all_groups():
    return Group.objects.all()

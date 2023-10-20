from apps.users.models import (
    Group,
    User
)


def get_all_users():
    return User.objects.all()


def get_all_groups():
    return Group.objects.all()


def change_user_group(user: User, group: Group):
    current_group = user.group_set.first()
    if current_group:
        user.group_set.remove(current_group)

    user.group_set.add(group)

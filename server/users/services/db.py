from users.models import (
    Group,
    User
)


def get_all_users():
    return User.objects.all()


def get_all_groups():
    return Group.objects.all()


def count_group_members(group: Group) -> int:
    return group.users.count()


def get_user_current_group(user: User) -> Group | None:
    return user.group_set.first()


def remove_user_group(user: User, group: Group):
    user.group_set.remove(group)


def add_user_group(user: User, group: Group):
    user.group_set.add(group)


def change_user_group(user: User, group: Group):
    current_group = get_user_current_group(user=user)
    if current_group:
        remove_user_group(user=user, group=current_group)

    add_user_group(user=user, group=group)




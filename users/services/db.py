from users.models import (
    Group,
    User,
    UserGroup
)


def get_all_users():
    return User.objects.all()


def get_all_groups():
    return Group.objects.all()


def get_user_group(user: User) -> Group | None:
    try:
        user_group = UserGroup.objects.get(user=user)
    except UserGroup.DoesNotExist:
        return None

    return user_group.group


def change_user_group(user: User, group: Group) -> UserGroup:
    try:
        curr_user_group = UserGroup.objects.get(user=user)
        curr_user_group.group = group
        return curr_user_group
    except UserGroup.DoesNotExist:
        return UserGroup.objects.create(user=user, group=group)

from rest_framework import permissions

from .services.db import count_group_members


class NoMembersInGroup(permissions.BasePermission):

    def has_object_permission(self, request, view, obj):
        if request.method == 'DELETE':
            if count_group_members(obj) > 0:
                return False

        return True

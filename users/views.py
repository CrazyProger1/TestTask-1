from rest_framework import viewsets

from .services.db import (
    get_all_users,
    get_all_groups
)
from .serializers import (
    CurrentUserSerializer,
    GroupSerializer
)


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = CurrentUserSerializer
    queryset = get_all_users()


class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = get_all_groups()

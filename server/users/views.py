from rest_framework import viewsets

from .services.db import (
    get_all_users,
    get_all_groups
)
from .serializers import (
    UserSerializer,
    GroupSerializer
)

from .permissions import NoMembersInGroup


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = get_all_users()


class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = get_all_groups()
    permission_classes = (NoMembersInGroup,)

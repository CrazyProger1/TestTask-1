from rest_framework import viewsets
from django.contrib.auth.models import User

from .serializers import CurrentUserSerializer, GroupSerializer
from .models import Group


class UserViewSet(viewsets.ModelViewSet):
    serializer_class = CurrentUserSerializer
    queryset = User.objects.all()


class GroupViewSet(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()

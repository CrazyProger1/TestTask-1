from django.contrib.auth.models import User
from rest_framework import serializers

from .models import Group


class CurrentUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'created', 'group')

    created = serializers.SerializerMethodField()
    group = serializers.SerializerMethodField()

    def get_created(self, obj):
        return obj.date_joined

    def get_group(self, obj):
        return 'No groups'


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', 'description')

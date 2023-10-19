from django.contrib.auth.models import User
from rest_framework import serializers

from .services.db import (
    get_all_groups,
    change_user_group,
    get_user_group
)

from .models import (
    Group
)


class UserSerializer(serializers.ModelSerializer):
    group = serializers.PrimaryKeyRelatedField(queryset=get_all_groups(), allow_null=True)

    class Meta:
        model = User
        fields = ('username', 'created', 'group')

    created = serializers.SerializerMethodField()

    def get_created(self, obj):
        return obj.date_joined

    def to_representation(self, instance):
        data = super(UserSerializer, self).to_representation(instance)

        group = get_user_group(instance)
        if group:
            data['group'] = group.pk
        return data

    def create(self, validated_data):
        group = validated_data.pop('group', None)
        user = super(UserSerializer, self).create(validated_data)

        if group:
            change_user_group(user=user, group=group)

        return user

    def update(self, user, validated_data):
        group = validated_data.pop('group', None)

        if group:
            change_user_group(user=user, group=group)

        return super(UserSerializer, self).update(user, validated_data)


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name', 'description')

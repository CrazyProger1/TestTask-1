from django.contrib.auth.models import User
from rest_framework import serializers

from .services.db import (
    get_all_groups,
    change_user_group,
    get_user_current_group,
    count_group_members
)

from .models import (
    Group
)


class GroupSerializer(serializers.ModelSerializer):
    user_count = serializers.SerializerMethodField()

    class Meta:
        model = Group
        fields = ('id', 'name', 'description', 'user_count')

    def get_user_count(self, obj):
        return count_group_members(obj)


class UserSerializer(serializers.ModelSerializer):
    group = serializers.PrimaryKeyRelatedField(
        queryset=get_all_groups(),
        required=True,
        write_only=True
    )

    created = serializers.DateTimeField(
        format='%d.%m.%Y',
        source='date_joined',
        read_only=True
    )

    class Meta:
        model = User
        fields = ('id', 'username', 'created', 'group')

    def to_representation(self, user: User):
        data = super(UserSerializer, self).to_representation(user)
        group = get_user_current_group(user)
        if group:
            data['group'] = GroupSerializer(group).data
        return data

    def create(self, validated_data):
        group = validated_data.pop('group', None)
        user = super(UserSerializer, self).create(validated_data)

        if group:
            change_user_group(
                user=user,
                group=group
            )
        return user

    def update(self, user, validated_data):
        group = validated_data.pop('group', None)

        if group:
            change_user_group(
                user=user,
                group=group
            )
        return super(UserSerializer, self).update(user, validated_data)

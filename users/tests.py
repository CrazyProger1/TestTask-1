from django.urls import reverse
from rest_framework.test import APIRequestFactory, APITestCase
from rest_framework import status

from .models import (
    User,
    Group
)


class UserTests(APITestCase):
    def test_create_user(self):
        url = reverse('user-list')

        data = {

        }

        response = self.client.post(
            url,
            data,
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class GroupTests(APITestCase):
    pass

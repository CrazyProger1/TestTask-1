from django.urls import reverse
from rest_framework.test import APITestCase
from rest_framework import status


class GroupTests(APITestCase):
    URL = reverse('group-list')

    def test_create_group(self):
        data = {
            'name': 'TestGroup',
            'description': 'Abc'
        }

        response = self.client.post(
            self.URL,
            data,
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)


class UserTests(APITestCase):
    URL = reverse('user-list')

    def setUp(self):
        data = {
            'name': 'TestGroup',
            'description': 'Test group'
        }
        self.client.post(
            reverse('group-list'),
            data
        )

    def tearDown(self):
        self.client.delete(
            reverse('group-detail', args=[1])
        )

    def test_create_user_without_username_and_group(self):
        data = {
            'username': None,
            'group': None
        }

        response = self.client.post(
            self.URL,
            data,
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIsNotNone(response.data.get('username'))
        self.assertIsNotNone(response.data.get('group'))

    def test_create_user(self):
        data = {
            'username': 'TestUser',
            'group': 1
        }

        response = self.client.post(
            self.URL,
            data,
            format='json'
        )

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

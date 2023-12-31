from rest_framework import routers

from .views import (
    UserViewSet,
    GroupViewSet
)

router = routers.DefaultRouter()
router.register(r'api/v1/users', UserViewSet)
router.register(r'api/v1/groups', GroupViewSet)
urlpatterns = router.urls

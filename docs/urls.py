from django.urls import re_path
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title='API',
        default_version='v1',
        description='Test Task API docs',
        contact=openapi.Contact(email='crazyproger1@gmail.com'),
        license=openapi.License(name='MIT License'),
    ),
    public=True,
)

urlpatterns = [
    re_path(r'^swagger(?P<format>\.json|\.yaml)', schema_view.without_ui(cache_timeout=0), name='schema-json'),
    re_path(r'^swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    re_path(r'^redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]

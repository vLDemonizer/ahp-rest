from django.conf.urls import url, include
from .views import ObjectiveViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter()
router.register(r'objectives', ObjectiveViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
from django.conf.urls import url, include

from .views import (
    ObjectiveViewSet, JudgementViewSet, ComponentViewSet, AppView,
)

from rest_framework.routers import SimpleRouter


router = SimpleRouter()
router.register(r'objectives', ObjectiveViewSet)
router.register(r'judgments', JudgementViewSet)
router.register(r'components', ComponentViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^app/', AppView.as_view(), name='app'),
]
from django.conf.urls import url, include

from .views import ParticipantViewSet, LoginView, LogoutView

from rest_framework.routers import SimpleRouter

router = SimpleRouter()
router.register(r'users', ParticipantViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
    url(r'^login/', LoginView.as_view(), name='login'),
    url(r'^logout/', LogoutView, name='logout'),
]
"""ahp_rest URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
from django.conf.urls import url, include
from django.conf.urls.static import static
from django.contrib import admin

from rest_framework.documentation import include_docs_urls

from .settings import STATIC_URL, STATIC_ROOT


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^$docs/', include_docs_urls(title='Todo API', description='RESTful API for Todo')),
    url(r'^', include('users.urls')),
    url(r'^', include('objectives.urls')),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(STATIC_URL, document_root=STATIC_ROOT)
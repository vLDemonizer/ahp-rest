# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.urls import reverse
from django.shortcuts import render, redirect
from django.contrib.auth.views import LoginView as CoreLoginView
from django.views.generic import TemplateView

from objectives.views import CreateListRetrieveUpdateDestroyViewSet
from .serializers import ParticipantSerializer 
from .models import Participant
from .forms import LoginForm

class ParticipantViewSet(CreateListRetrieveUpdateDestroyViewSet):
    serializer_class = ParticipantSerializer
    queryset = Participant.objects.all()

class LoginView(CoreLoginView):
    form_class = LoginForm
    template_name = 'login.html'

def LogoutView(request):
    logout(request)
    return redirect(reverse('login'))
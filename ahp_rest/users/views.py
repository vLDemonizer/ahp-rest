# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.urls import reverse_lazy
from django.shortcuts import render, redirect
from django.views.generic import TemplateView, FormView
from django.contrib.auth import login, authenticate, logout

from objectives.views import CreateListRetrieveUpdateDestroyViewSet
from .serializers import ParticipantSerializer 
from .models import Participant
from .forms import LoginForm

class ParticipantViewSet(CreateListRetrieveUpdateDestroyViewSet):
    serializer_class = ParticipantSerializer
    queryset = Participant.objects.all()

    

class LoginView(FormView):
    form_class = LoginForm
    template_name = 'login.html'
    success_url = reverse_lazy('app')
    redirect_field_name = 'redirect_to'
    redirect_authenticated_user = True

    def get(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect(reverse_lazy('app'))

        return super(LoginView, self).get(request, *args, **kwargs)

    def form_valid(self, form):
        username = form.cleaned_data['username']
        password = form.cleaned_data['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(self.request, user)
            return super(LoginView, self).form_valid(form)
        else:
            form.add_error('username', 'No user found')
            return super(LoginView, self).form_invalid(form)

def LogoutView(request):
    logout(request)
    return redirect(reverse_lazy('login'))
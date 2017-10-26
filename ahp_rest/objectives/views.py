# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.views.generic import TemplateView

from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin,
    DestroyModelMixin
)
from rest_framework.viewsets import GenericViewSet

from .serializers import (
    ObjectiveSerializer, JudgementSerializer, ComponentSerializer
)
from .models import Objective, Judgement, Component


class CreateListRetrieveUpdateDestroyViewSet(
    CreateModelMixin, ListModelMixin, RetrieveModelMixin,
    UpdateModelMixin, DestroyModelMixin, GenericViewSet
):
    pass

class ObjectiveViewSet(CreateListRetrieveUpdateDestroyViewSet):
    serializer_class = ObjectiveSerializer
    queryset = Objective.objects.all()


class JudgementViewSet(CreateListRetrieveUpdateDestroyViewSet):
    serializer_class = JudgementSerializer
    queryset = Judgement.objects.all()


class ComponentViewSet(CreateListRetrieveUpdateDestroyViewSet):
    serializer_class = ComponentSerializer
    queryset = Component.objects.all()

class AppView(TemplateView):
    template_name = 'app.html'
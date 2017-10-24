# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render

from rest_framework.mixins import (
    CreateModelMixin, ListModelMixin, RetrieveModelMixin, UpdateModelMixin
)
from rest_framework.viewsets import GenericViewSet

from .serializers import ObjectiveSerializer
from .models import Objective


class CreateListRetrieveUpdateViewSet(
    CreateModelMixin, ListModelMixin, RetrieveModelMixin,
    UpdateModelMixin, GenericViewSet
):
    pass

class ObjectiveViewSet(CreateListRetrieveUpdateViewSet):
    serializer_class = ObjectiveSerializer
    queryset = Objective.objects.all()
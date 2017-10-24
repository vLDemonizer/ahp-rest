# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

from objectives.models import Objective

class Component(models.Model):
    judgement = models.ForeignKey('Judgement', related_name='components', on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    most_important = models.BooleanField(default=False)
    by_how_much = models.PositiveSmallIntegerField()


class Judgement(models.Model):
    name = models.CharField(max_length=80)
    comment = models.TextField(max_length=300, blank=True)
    objective = models.ForeignKey('objectives.Objective', related_name='judgments', on_delete=models.CASCADE)



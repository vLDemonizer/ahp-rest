from __future__ import unicode_literals

from django.db import models


class Component(models.Model):
    judgement = models.ForeignKey('Judgement', related_name='components', on_delete=models.CASCADE)
    name = models.CharField(max_length=80)
    most_important = models.BooleanField(default=False)
    by_how_much = models.PositiveSmallIntegerField()


class Judgement(models.Model):
    name = models.CharField(max_length=80)
    comment = models.TextField(max_length=300, blank=True)
    objective = models.ForeignKey('Objective', related_name='judgments', on_delete=models.CASCADE)

class Objective(models.Model):
    name = models.CharField(max_length=160)
    author = models.ForeignKey('users.Participant', related_name='objectives', on_delete=None)
    date = models.DateTimeField(auto_now_add=True)
    scale = models.PositiveSmallIntegerField()
    alpha = models.FloatField()
    gci = models.FloatField()
    cr = models.FloatField()
    thresh = models.FloatField()

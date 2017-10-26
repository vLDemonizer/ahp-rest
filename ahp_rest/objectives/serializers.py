from rest_framework import serializers

from .models import Objective, Judgement, Component

class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = ('name', 'most_important', 'by_how_much')


class JudgementSerializer(serializers.ModelSerializer):
    components = ComponentSerializer(many=True)

    class Meta:
        model = Judgement
        fields = ('name', 'comment', 'components')

    def create(self, validated_data):
        components_data = validated_data.pop('components')
        judgement = Judgement.objects.create(**validated_data)
        for component_data in components_data:
             Component.objects.create(judgement=judgement, **component_data)
        return judgement


class ObjectiveSerializer(serializers.ModelSerializer):
    judgments = JudgementSerializer(many=True)

    class Meta:
        model = Objective
        fields = ('name', 'scale', 'alpha', 'gci', 'cr', 'thresh', 'judgments')

    def create(self, validated_data):
        judgments_data = validated_data.pop('judgments')
        author = None
        request = self.context.get('request')
        if request and hasattr(request, 'user'):
            author = request.user
        objective = Objective.objects.create(**validated_data)
        for judgement_data in judgments_data:
            Judgement.objects.create(objective=objective, **judgement_data)
        return objective

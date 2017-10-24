from rest_framework import serializers

from .models import Judgement, Component


class ComponentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Component
        fields = ('name', 'most_important', 'by_how_much')

class JudgementSerializer(serializers.ModelSerializer):
    components = ComponentSerializer(many=True)

    class Meta:
        model = Judgement
        fields = ('name', 'comment')

    def create(self, validated_data):
        components_data = validated_data.pop('components')
        judgement = Judgement.objects.create(**validated_data)
        for component_data in components_data:
             Component.objects.create(judgement=judgement, **component_data)
        return judgement

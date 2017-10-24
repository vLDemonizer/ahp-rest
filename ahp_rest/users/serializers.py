from rest_framework import serializers

from .models import Participant

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ('username', 'password', 'first_name', 'last_name')
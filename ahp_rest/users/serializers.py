from rest_framework import serializers

from .models import Participant

class ParticipantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Participant
        fields = ('pk', 'username', 'password', 'first_name', 'last_name')

    def create(self, validated_data):
        user = super(ParticipantSerializer, self).create(validated_data)
        user.set_password(validated_data['password'])
        user.save()
        return user
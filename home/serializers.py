from rest_framework import serializers
from .models import Searches

class SearchesSerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    search = serializers.CharField(max_length=200)

    def create(self, validated_data):
        """
        Create and return a new `Snippet` instance, given the validated data.
        """
        return Searches.objects.create(**validated_data)

    def update(self, instance, validated_data):
        """
        Update and return an existing `Snippet` instance, given the validated data.
        """
        instance.search = validated_data.get('search', instance.search)
        instance.save()
        return instance


from rest_framework import serialiazers

from .model import List, Card


class ListSerializer(serialiazers.ModelSerializer):
	class Meta:
		model = List


class CardSerializer(serialiazers.ModelSerializer):
	class Meta:
		model = Card
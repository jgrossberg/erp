from rest_framework import serializers

from .models import Entry, Account

class EntrySerializer(serializers.ModelSerializer):

	class Meta:
		model = Entry

		fields = (
			'id',
			'account',
			'amount',
			'added_on'
		)

class AccountSerializer(serializers.ModelSerializer):
	class Meta:
		model = Account
		fields = (
			'id',
			'account_number',
			'account_name',
		)


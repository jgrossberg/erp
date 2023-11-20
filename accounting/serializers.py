from rest_framework import serializers

from .models import JournalEntry, Transaction, Account, JournalEntryTemplate


class JournalEntrySerializer(serializers.ModelSerializer):
	class Meta:
		model = JournalEntry

		fields = ('id', 'memo',)
class TransactionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Transaction

		fields = (
			'id',
			'account',
			'amount',
			'added_on',
			'entry_date',
			'journal_entry'
		)

class AccountSerializer(serializers.ModelSerializer):
	class Meta:
		model = Account
		fields = (
			'id',
			'account_number',
			'account_name',
		)

class JournalEntryTemplateSerializer(serializers.ModelSerializer):
	class Meta:
		model = JournalEntryTemplate
		fields = ('name', 'accounts',)
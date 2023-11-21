from rest_framework import serializers

from .models import JournalEntry, Transaction, Account, JournalEntryTemplate


class TransactionSerializer(serializers.ModelSerializer):
	class Meta:
		model = Transaction
		fields = (
			'id',
			'account',
			'amount',
			'added_on',
			'entry_date',
		)

class JournalEntrySerializer(serializers.ModelSerializer):
	transactions = TransactionSerializer(many=True)
	class Meta:
		model = JournalEntry
		fields = ('id', 'memo', 'transactions')

	def create(self, validated_data):
		transactions_data = validated_data.pop('transactions')
		journal_entry = JournalEntry.objects.create(**validated_data)
		for transaction_data in transactions_data:
			Transaction.objects.create(journal_entry=journal_entry, **transaction_data)
		return journal_entry


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
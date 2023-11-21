from django.db import models

# Create your models here.

class Account(models.Model):
	account_number = models.CharField(max_length=50)
	account_name = models.CharField(max_length=100)

	def __str__(self):
		return '{} - {}'.format(self.account_number, self.account_name)

class JournalEntry(models.Model):
	memo = models.CharField(max_length=100)

	def __str__(self):
		return self.memo
	
class Transaction(models.Model):
	account = models.ForeignKey(Account,
		on_delete=models.CASCADE,
		default = 1
	)
	amount = models.FloatField()
	added_on = models.DateTimeField(auto_now=True)
	entry_date = models.DateField(auto_now=False)
	journal_entry = models.ForeignKey(JournalEntry, related_name='transactions', on_delete=models.CASCADE, null=True)


	def __str__(self):
		return '{} >>> {}'.format(self.account.account_name, self.amount)
	
class JournalEntryTemplate(models.Model):
	name = models.CharField(max_length=100)
	accounts = models.JSONField(null=False)

	def __str__(self):
		return self.name
	
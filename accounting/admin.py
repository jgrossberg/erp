from django.contrib import admin

from .models import Account, JournalEntry, Transaction, JournalEntryTemplate

# Register your models here.
admin.site.register(Account)
admin.site.register(JournalEntry)

admin.site.register(Transaction)
admin.site.register(JournalEntryTemplate)

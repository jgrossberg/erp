from django.contrib import admin

from .models import Account, JournalEntry, Entry, JournalEntryTemplate

# Register your models here.
admin.site.register(Account)
admin.site.register(JournalEntry)

admin.site.register(Entry)
admin.site.register(JournalEntryTemplate)

from django.contrib import admin

from .models import Account, Entry, JournalEntryTemplate

# Register your models here.
admin.site.register(Account)
admin.site.register(Entry)
admin.site.register(JournalEntryTemplate)

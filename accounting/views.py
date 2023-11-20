from django.shortcuts import render

from django.contrib.auth.models import User

from rest_framework import viewsets, generics, status
from rest_framework.response import Response

from .models import Account, JournalEntry, Transaction, JournalEntryTemplate
from .serializers import TransactionSerializer, AccountSerializer, JournalEntryTemplateSerializer, JournalEntrySerializer



def home(request):
    return render(request, 'main/index.html')

class JournalEntryViewSet(viewsets.ModelViewSet):
    serializer_class = JournalEntrySerializer
    queryset = JournalEntry.objects.all()



class TransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TransactionSerializer
    queryset = Transaction.objects.all()

    def create(self, request, pk=None, company_pk=None, project_pk=None):
        is_many = isinstance(request.data, list)

        serializer = self.get_serializer(data=request.data, many=is_many)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class AccountViewSet(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all().order_by('account_number')


class JournalEntryTemplateViewSet(viewsets.ModelViewSet):
    serializer_class = JournalEntryTemplateSerializer
    queryset = JournalEntryTemplate.objects.all()

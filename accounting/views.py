from django.shortcuts import render

from django.contrib.auth.models import User

from rest_framework import viewsets, generics

from .models import Account, Entry 
from .serializers import EntrySerializer, AccountSerializer



def home(request):
    return render(request, 'main/index.html')


class EntryViewSet(viewsets.ModelViewSet):
    serializer_class = EntrySerializer
    queryset = Entry.objects.all()

class AccountViewSet(viewsets.ModelViewSet):
    serializer_class = AccountSerializer
    queryset = Account.objects.all()


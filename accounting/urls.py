from django.urls import path, re_path, include
from rest_framework.routers import DefaultRouter
from django.views.generic import TemplateView

from accounting import views

router = DefaultRouter()
router.register(r'transactions', views.TransactionViewSet)
router.register(r'accounts', views.AccountViewSet)
router.register(r'templates', views.JournalEntryTemplateViewSet)
router.register(r'entries', views.JournalEntryViewSet)



urlpatterns = [
    path('', include(router.urls)),
    path('home', TemplateView.as_view(template_name='index.html')),
]

from django.contrib import admin
from django.urls import re_path, path
from django.conf.urls import include


urlpatterns = [
  re_path(r'^admin/', admin.site.urls),
  path('', include('accounting.urls')),
]


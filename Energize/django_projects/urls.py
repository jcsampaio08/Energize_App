"""
URL configuration for django_projects project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
import energize.views as views

urlpatterns = [
    path('inicio', views.energize_inicio),
    path('infos', views.energize_infos),
    path('index', views.energize_index),
    path('cadastro', views.energize_cadastro),
    path('login_1', views.energize_login_1),
    path('login', views.energize_login),
    path('admin/', admin.site.urls),
]

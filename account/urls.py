from django.urls import path, include
from knox import views as knox_views
from .api import RegisterAPI, LoginAPI, UserAPI, LogoutAPI
from .views import *


urlpatterns = [
    path('api/auth', include('knox.urls')),
    path('api/auth/register', RegisterAPI.as_view()),
    path('api/auth/login', LoginAPI.as_view()),
    path('api/auth/list', listAPI.as_view()),
    path('api/auth/user', UserAPI.as_view()),
    path('api/auth/logout', LogoutAPI.as_view())
    # path('api/auth/logoutall/', knox_views.LogoutAllView.as_view(), name='knox_logoutall'),
]
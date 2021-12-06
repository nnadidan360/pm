from django.contrib.auth.models import User
from django.shortcuts import render
from rest_framework import generics, permissions

from account.serializers import UserSerializer

# Create your views here.

class listAPI(generics.ListAPIView):
    permission_classes = [
        permissions.AllowAny
    ]
    queryset = User.objects.all()
    serializer_class = UserSerializer


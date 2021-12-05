from rest_framework import generics, permissions
from .serializers import RegisterSerializer, UserSerializer, LoginSerializer, UserProfileSerializer, UserProfileUpdateSerializer
from rest_framework.response import Response
from knox.models import AuthToken



# RegisterApi

class RegisterAPI(generics.GenericAPIView):
    serializer_class = RegisterSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })



# LoginApi

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        return Response({
            "user": UserSerializer(user, context=self.get_serializer_context()).data,
            "token": AuthToken.objects.create(user)[1]
        })


#LogoutApi

class LogoutAPI(generics.GenericAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def post(self, request, *args, **kwargs):
        request.user.auth_token.delete()
        return Response({"success": "Logout Success"})



#Get userAPI
class UserAPI(generics.RetrieveAPIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]
    serializer_class = UserSerializer

    def get_object(self):
        return self.request.user
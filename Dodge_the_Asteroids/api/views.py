from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.views import Response, APIView
from rest_framework import status
from serializers import *


class PlayListAPIView(ListAPIView):
    model = Play
    serializer_class = PlaySerializer

    def get_queryset(self):
        return Play.objects.all()


class PlayDetailAPIView(RetrieveAPIView):
    model = Play
    serializer_class = PlaySerializer
    lookup_field = "id"

    def get_queryset(self):
        return Play.objects.filter()


class PlayCreateAPIView(APIView):

    def post(self, request):
        serialized = PlaySerializer(data=request.data)
        if serialized.is_valid():
            serialized.save()
            return Response(serialized.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serialized._errors, status=status.HTTP_400_BAD_REQUEST)

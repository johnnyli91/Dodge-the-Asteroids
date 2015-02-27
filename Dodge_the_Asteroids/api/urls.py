from django.conf.urls import patterns, url
from Dodge_the_Asteroids.api.views import PlayListAPIView, PlayDetailAPIView, PlayCreateAPIView

urlpatterns = patterns('',
    url(r"^play/$", PlayListAPIView.as_view(), name="all_plays"),
    url(r"^play/(?P<id>\d+)/$", PlayDetailAPIView.as_view(), name="play"),
    url(r"^play/create/$", PlayCreateAPIView.as_view(), name="create_play"),

)
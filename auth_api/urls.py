from django.conf.urls import url

from .api import LogoutView, LoginView


urlpatterns = [
    url(r'^login/$', LoginView.as_view()),
    url(r'^logout/$', LogoutView.as_view()),
]

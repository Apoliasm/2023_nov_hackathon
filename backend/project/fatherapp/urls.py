from django.urls import path
from . import views
app_name = "fatherapp"

urlpatterns = [
    path('',views.basicview.as_view(),name='base'),
    # path('location',views.locationView.as_view(),name='location'),
    # path('hiresave',views.saveHireView.as_view(),name='savehire'),
    # path('savewel',views.saveWelfare.as_view(),name='savewel'),
    path('welfare',views.welfareView.as_view(),name='welfare'),
    path('hire',views.hireView.as_view(),name='hire'),
    path('location',views.locationView.as_view(),name='location'),
    path('chat',views.chatView.as_view(),name='chat'),
]
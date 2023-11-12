from django.urls import path
from . import views
app_name = "fatherapp"

urlpatterns = [
    path('',views.basicview.as_view(),name='base'),
    # path('location',views.locationView.as_view(),name='location'),
    # path('hiresave',views.saveHireView.as_view(),name='savehire'),
    # path('savewel',views.saveBenefit.as_view(),name='savewel'),
    path('benefit',views.BenefitView.as_view(),name='benefit'),
    path('hire',views.hireView.as_view(),name='hire'),
    path('location',views.locationView.as_view(),name='location'),
    path('chat',views.chatView.as_view(),name='chat'),
    path('resume',views.resumeView.as_view(),name='resume')
]
from django.urls import path
from . import views
app_name = "fatherapp"

urlpatterns = [
    path('',views.basicview.as_view(),name='base'),
    # path('locationadd',views.locationaddview.as_view(),name='location'),
    # path('hiresave',views.saveHireView.as_view(),name='savehire'),
    # path('savewel',views.saveBenefit.as_view(),name='savewel'),
    path('benefit',views.BenefitView.as_view(),name='benefit'),
    path('hire',views.hireView.as_view(),name='hire'),
    path('location',views.locationView.as_view(),name='location'),
    path('chat',views.chatView.as_view(),name='chat'),
    path('resume',views.resumeView.as_view(),name='resume'),
    path('resumesave',views.resumesaveView.as_view(),name='resumesave'),
    path('user',views.userView.as_view(),name='user'),
    # path('benefitsave',views.benefitaddView.as_view(),name='benefitsave')
]
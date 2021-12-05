# -*- encoding: utf-8 -*-
"""
Copyright (c) 2019 - present AppSeed.us
"""

from django.urls import path, re_path
from django.urls.conf import include
from application import views
from django.contrib.auth.views import LogoutView
from application.views import profileList,detailTodo,fight,fundAccount

# app_name = 'application'



urlpatterns = [
    # auth
    path('login/', views.login_view, name="login"),
    path('register/', views.register_user, name="register"),
    path('logout/', LogoutView.as_view(), name="logout"),

    # The home page
    path('', views.index, name='home'),
    path('pricing', views.pricing, name='pricing'),
    path('about', views.about, name='about'),
    path('affiliate', views.affiliate, name='affiliate'),
    path('farm', views.farm, name='farm'),

    # dashboard
    path('dashboard', views.dashboard, name='dashboard'),
    path('settings', views.profileUpdate, name='profileUpdate'),
    path('withdraw', views.withdraw, name='withdraw'),
    path('depositHistory', views.depositHistory, name='depositHistory'),
    path('earnings', views.earnings, name='earnings'),
    path('investments', views.investments, name='investments'),
    path('purchasePlan', views.purchasePlan, name='purchasePlan'),




    # api path
    path('api/ready', profileList.as_view()),
    path('<int:pk>/api/check', fight.as_view()),
    path('<int:pk>/api/detail', detailTodo.as_view()),



    # path('settings', views.profileUpdate, name='profileUpdate'),


    # Matches any html file
    re_path(r'^.*\.*', views.pages, name='pages'),

]

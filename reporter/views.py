from django.shortcuts import render, get_object_or_404, redirect
from django.template import loader
from django.urls import reverse
from django.core import exceptions
from django.views.generic.base import TemplateView
from django.contrib.auth import authenticate, login, logout
from django.contrib import sessions
from django.views.decorators.csrf import ensure_csrf_cookie, csrf_protect, csrf_exempt
from django.http import HttpResponse, HttpResponseRedirect
#models
from .models.report import *
#rest
from rest_framework import viewsets, serializers, status, response
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import permissions
from django_filters.rest_framework import DjangoFilterBackend
from .serializers import *

class MainView(TemplateView):
    template_name = 'reporter_home.html'

#                 #
# REST - Viewsets #
#                 #
class ExportReportViewSet(viewsets.ModelViewSet):
    try:
        queryset = ExportReport.objects.all()
        serializer_class = ExportReportSerializer
    except: ExportReport.HTTP_404_NOT_FOUND

class FormatViewSet(viewsets.ModelViewSet):
    try:
        queryset = Format.objects.all()
        serializer_class = FormatSerializer
    except: Format.HTTP_404_NOT_FOUND

class DayViewSet(viewsets.ModelViewSet):
    try:
        queryset = Day.objects.all()
        serializer_class = DaySerializer
    except: Day.HTTP_404_NOT_FOUND

class ScheduleTypeViewSet(viewsets.ModelViewSet):
    try:
        queryset = ScheduleType.objects.all()
        serializer_class = ScheduleTypeSerializer
    except: ScheduleType.HTTP_404_NOT_FOUND   

class ScheduleViewSet(viewsets.ModelViewSet):
    try:
        queryset = Schedule.objects.all()
        serializer_class = ScheduleSerializer
    except: Schedule.HTTP_404_NOT_FOUND   
   


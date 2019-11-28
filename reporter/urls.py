from django.urls import path, include
from django.conf.urls import url, include

from .views import *
#REST
from rest_framework import routers
from rest_framework.urlpatterns import format_suffix_patterns

#namespace
app_name = 'reporter'
router = routers.DefaultRouter()
#in router urls:
router.register(r'ExportReport',ExportReportViewSet)
router.register(r'Format', FormatViewSet)
router.register(r'Day', DayViewSet)
router.register(r'Schedule',ScheduleViewSet)
router.register(r'ScheduleType',ScheduleTypeViewSet)

urlpatterns = [
    path('', MainView.as_view(), name='home'),
    path('rest/', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]

#strange bug - it doesnt want to work
#urlpatterns = format_suffix_patterns(urlpatterns)
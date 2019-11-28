from .models.report import *

from rest_framework import serializers


class ExportReportSerializer(serializers.ModelSerializer):
    format = serializers.CharField(source="Format.name")
    schedule = serializers.CharField(source="Schedule")
    class Meta:
        model = ExportReport
        fields = [field.name for field in model._meta.fields]#all
        fields.extend(['format','schedule',])#add
        fields.append('format')
        fields.append('schedule')

class FormatSerializer(serializers.ModelSerializer):

    class Meta:
        model = Format
        fields = [field.name for field in model._meta.fields]#all

class DaySerializer(serializers.ModelSerializer):

    class Meta:
        model = Day
        fields = [field.name for field in model._meta.fields]#all

class ScheduleTypeSerializer(serializers.ModelSerializer): 
    #schedule = serializers.CharField(source="Schedule.name")

    class Meta:
        model = ScheduleType
        fields = [field.name for field in model._meta.fields]#all

class ScheduleSerializer(serializers.ModelSerializer):
    day = serializers.CharField(source="day.name")
    scheduleType = serializers.CharField(source="ScheduleType")
    class Meta:
        model = Schedule
        fields = [field.name for field in model._meta.fields]#all
        fields.extend(['day','scheduleType'])
        fields.append('day')
        fields.append('scheduleType')


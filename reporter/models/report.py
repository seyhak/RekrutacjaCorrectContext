from django.db import models

# Create your models here.
class ExportReport(models.Model):
    report_name = models.CharField(max_length=60)
    format = models.ForeignKey("Format", on_delete=models.SET_NULL, null=True)
    email = models.EmailField(max_length=60, blank=True)
    schedule = models.ForeignKey("Schedule", on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return self.name

class Format(models.Model):
    name = models.CharField(max_length=10)
    def __str__(self):
        return self.name  

class Day(models.Model):
    name = models.CharField(max_length=10)
    def __str__(self):
        return self.name  

class ScheduleType(models.Model):
    name = models.CharField(max_length=20)
    description = models.CharField(max_length=20,blank=True,default="")
    def __str__(self):
        return self.name 
class Schedule(models.Model):
    date = models.DateField(blank=True, null=True)
    time = models.TimeField(blank=True, null=True)
    day = models.ForeignKey("Day", blank=True, null=True, on_delete=models.SET_NULL)
    scheduleType = models.ForeignKey("ScheduleType", on_delete=models.SET_NULL, null=True)
    def __str__(self):
        return self.scheduleType.name 



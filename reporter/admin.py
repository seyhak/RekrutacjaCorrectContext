from django.contrib import admin
from .models.report import *
# Register your models here.
admin.site.register(ExportReport)
admin.site.register(Format)
admin.site.register(Day)
admin.site.register(ScheduleType)
admin.site.register(Schedule)
# Generated by Django 2.2.6 on 2019-11-28 19:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reporter', '0005_remove_exportreport_scheduletype'),
    ]

    operations = [
        migrations.AlterField(
            model_name='scheduletype',
            name='description',
            field=models.CharField(blank=True, default='', max_length=20),
        ),
    ]

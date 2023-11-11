# Generated by Django 4.2.5 on 2023-11-11 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fatherapp', '0012_remove_hire_user_id_hire_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='hire',
            name='submit_period',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AddField(
            model_name='hire',
            name='work_benefits',
            field=models.CharField(default='', max_length=25),
        ),
        migrations.AlterField(
            model_name='hire',
            name='work_facility',
            field=models.CharField(default='', max_length=25),
        ),
    ]
# Generated by Django 4.2.5 on 2023-11-11 11:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fatherapp', '0009_hire'),
    ]

    operations = [
        migrations.AddField(
            model_name='hire',
            name='hire_title',
            field=models.CharField(default='', max_length=50),
        ),
        migrations.AlterField(
            model_name='hire',
            name='hire_id',
            field=models.CharField(default='', max_length=20),
        ),
    ]

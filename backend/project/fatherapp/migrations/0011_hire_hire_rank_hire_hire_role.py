# Generated by Django 4.2.5 on 2023-11-11 11:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fatherapp', '0010_hire_hire_title_alter_hire_hire_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='hire',
            name='hire_rank',
            field=models.CharField(default='', max_length=25),
        ),
        migrations.AddField(
            model_name='hire',
            name='hire_role',
            field=models.CharField(default='', max_length=25),
        ),
    ]

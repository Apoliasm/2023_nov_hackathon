# Generated by Django 4.2.5 on 2023-11-11 12:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fatherapp', '0013_hire_submit_period_hire_work_benefits_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='Welfare',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('type', models.CharField(max_length=30)),
                ('service', models.CharField(max_length=200)),
                ('content', models.CharField(max_length=200)),
                ('target', models.CharField(max_length=50)),
                ('how', models.CharField(max_length=200)),
            ],
        ),
    ]
# Generated by Django 4.2.5 on 2023-11-10 13:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('fatherapp', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='user_id',
            field=models.CharField(max_length=20, primary_key=True, serialize=False),
        ),
    ]

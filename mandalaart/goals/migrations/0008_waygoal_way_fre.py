# Generated by Django 4.0.4 on 2023-07-14 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('goals', '0007_remove_waygoal_way_fre'),
    ]

    operations = [
        migrations.AddField(
            model_name='waygoal',
            name='way_fre',
            field=models.IntegerField(null=True),
        ),
    ]

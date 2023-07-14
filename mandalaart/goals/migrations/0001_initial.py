# Generated by Django 4.2.3 on 2023-07-14 16:45

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Plan',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('main_goal', models.CharField(max_length=200)),
            ],
        ),
        migrations.CreateModel(
            name='SubGoal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_goal', models.CharField(max_length=200)),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='sub_goals', to='goals.plan')),
            ],
        ),
        migrations.CreateModel(
            name='WayGoal',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('way_goal', models.CharField(max_length=200)),
                ('way_fre', models.IntegerField(null=True)),
                ('way_memo', models.TextField()),
                ('sub', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goals.subgoal')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('content', models.TextField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('modified_at', models.DateTimeField(auto_now=True)),
                ('author', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
                ('plan', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goals.plan')),
            ],
        ),
    ]

# Generated by Django 4.0.4 on 2023-07-14 12:12

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
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
                ('way_fre', models.IntegerField()),
                ('way_memo', models.TextField()),
                ('sub', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='goals.subgoal')),
            ],
        ),
    ]

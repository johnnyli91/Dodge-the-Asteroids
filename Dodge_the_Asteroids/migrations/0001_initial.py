# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Play',
            fields=[
                ('id', models.AutoField(verbose_name='ID', serialize=False, auto_created=True, primary_key=True)),
                ('game', models.CharField(max_length=100)),
                ('score', models.IntegerField()),
            ],
            options={
            },
            bases=(models.Model,),
        ),
    ]

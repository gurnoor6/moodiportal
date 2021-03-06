# Generated by Django 3.0.4 on 2020-05-02 22:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='RegistrationData',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=80)),
                ('college', models.CharField(max_length=200)),
                ('city', models.CharField(max_length=50)),
                ('contact', models.CharField(max_length=80)),
                ('email', models.CharField(max_length=80)),
                ('idcard', models.ImageField(upload_to='images/')),
            ],
        ),
    ]

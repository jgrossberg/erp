# Generated by Django 4.2.7 on 2023-11-19 23:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounting', '0003_rename_transaction_entry_and_more'),
    ]

    operations = [
        migrations.CreateModel(
            name='JournalEntryTemplate',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('accounts', models.JSONField()),
            ],
        ),
    ]
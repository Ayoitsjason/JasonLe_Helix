from django.db import models
from django.db.models import Model

# Create your models here.

class Questions(Model):
  question_id = models.AutoField(primary_key=True)
  title = models.CharField(max_length=50)
  text = models.CharField(max_length=1000)

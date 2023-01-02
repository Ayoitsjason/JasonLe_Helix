from rest_framework import serializers
from portal.models import Questions

class QuestionSerializer(serializers.ModelSerializer):
  class Meta:
    model=Questions
    fields=("question_id",'title','text')
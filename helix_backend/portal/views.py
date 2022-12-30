from django.shortcuts import render
from django.http.response import HttpResponseBadRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from portal.models import Questions
from portal.serializer import QuestionSerializer

# Create your views here.

@csrf_exempt
def createQuestion(request):
  if request.method == 'POST':
    question_data=JSONParser().parse(request)
    question_serializer=QuestionSerializer(data=question_data)
    if question_serializer.is_valid():
      question_serializer.save()
      return JsonResponse("Added Successfully",safe=False)
    else:
      return JsonResponse("Failed to Add",safe=False)
  else:
    return HttpResponseBadRequest("Unable to post")

@csrf_exempt
def deleteQuestion(request, id):
  if request.method == 'DELETE':
    question = Questions.objects.get(question_id=id)
    question.delete()
    return JsonResponse("Deleted Successfully",safe=False)
  else:
    return HttpResponseBadRequest("Unable to delete")

@csrf_exempt
def getAllQuestions(request):
  if request.method == "GET":
    questions = Questions.objects.all()
    question_serializer=QuestionSerializer(questions,many=True)    
    return JsonResponse(question_serializer.data,safe=False)
  else:
    return HttpResponseBadRequest("Unable to get questions")
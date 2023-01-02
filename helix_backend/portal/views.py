from django.shortcuts import render
from django.http.response import HttpResponseBadRequest, JsonResponse
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser

from portal.models import Questions
from portal.serializer import QuestionSerializer

import logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)
# Create your views here.

@csrf_exempt
def createQuestion(request):
  if request.method == 'POST':
    logger.info('Start writing database')
    question_data=JSONParser().parse(request)
    question_serializer=QuestionSerializer(data=question_data)
    if question_serializer.is_valid():
      logger.info('Writing record ...')
      try:
        res = question_serializer.save()
        logger.info('question_id ' + str(res.question_id) + ' successfully created')
        return JsonResponse("Added Successfully",safe=False)
      except Exception as e:
        logger.exception(e)
    else:
      logger.error('Could not write record, bad data format')
      return JsonResponse("Failed to Add",safe=False)
  else:
    logger.error('User made wrong request to questions/create route')
    return HttpResponseBadRequest("Unable to post")

@csrf_exempt
def deleteQuestion(request, id):
  logger.info('Start writing database')
  if request.method == 'DELETE':
    logger.info('Writing record ...')
    try:
      question = Questions.objects.get(question_id=id)
      question.delete()
      logger.info('question_id ' + str(id) + ' successfully deleted')
      return JsonResponse("Deleted Successfully",safe=False)
    except Exception as e:
      logger.exception(e)
      return JsonResponse("Failed to Delete",safe=False)
  else:
    logger.error('User made wrong request to questions/delete/ route')
    return HttpResponseBadRequest("Unable to delete")

@csrf_exempt
def getAllQuestions(request):
  logger.info('Start reading database')
  if request.method == "GET":
    logger.info('Getting records ...') 
    try:
      questions = Questions.objects.all()
      question_serializer=QuestionSerializer(questions,many=True)   
      logger.info('Finish getting records')
      return JsonResponse(question_serializer.data,safe=False)
    except Exception as e:
      logger.exception(e)
  else:
    logger.error('User made wrong request to questions/all route')
    return HttpResponseBadRequest("Unable to get questions")
from django.conf.urls import include
from django.urls import path
from portal import views

questions = [
  path('create', views.createQuestion, name='question_create'),
  path('delete/<int:id>', views.deleteQuestion, name='question_delete'),
  path('all', views.getAllQuestions, name='questions_all'),
]

urlpatterns = [
  path('questions/', include(questions)),
]
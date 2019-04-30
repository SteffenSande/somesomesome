from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import HttpResponse

from .models import Searches
from .serializers import SearchesSerializer


def index(request):
    return render(request, 'frontend/index.html')


@csrf_exempt
def json(request):
    return HttpResponse('hei')

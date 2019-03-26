from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt

from .models import Searches
from .serializers import SearchesSerializer


def index(request):
    return render(request, 'frontend/index.html')


def test(request):
    searches = Searches.objects.all()

    return render(request, 'home/test.html', {'searches': searches})


@csrf_exempt
def json(request):
    if request.method == 'GET':
        searches = Searches.objects.all()
        serializers = SearchesSerializer(searches, many=True)
        return JsonResponse(serializers.data, safe=False)

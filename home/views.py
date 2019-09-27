import requests
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from util.api import API
from django.http import HttpResponse

def index(request):
    return render(request, 'frontend/index.html')

def listen(request):
    return render(request, 'frontend/ListenIn.html')

@csrf_exempt
def json(request):
    response = API.call("Snow(Hey Oh)", API.Options.SONG)

    #access_token = API.get_access_token()
    #aut = 'Bearer ' + access_token
    #url_cat = 'https://api.spotify.com/v1/browse/categories'
    #response = requests.get(url_cat, headers={'Authorization': aut})
    #categories = {'category': (response.json()['categories']['items'])}
    #print(categories)

    return JsonResponse(response.json())

@csrf_exempt
def search(request, searchText):
    response = API.call(searchText, API.Options.ARTIST)

    return JsonResponse(response.json())

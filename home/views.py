import requests
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from util.access_token import AccessToken


def index(request):
    return render(request, 'frontend/index.html')


@csrf_exempt
def json(request):
    access_token = AccessToken.get_access_token()
    aut = 'Bearer ' + access_token
    url_cat = 'https://api.spotify.com/v1/browse/categories'
    response = requests.get(url_cat, headers={'Authorization': aut})
    categories = {'category': (response.json()['categories']['items'])}
    print(categories)

    return JsonResponse(categories)

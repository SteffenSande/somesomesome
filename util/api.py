import requests
from enum import Enum
import urllib.parse

class API:
    access_token = ''

    class Options(Enum):
        ARTIST="artist"
        ALBUM="album"
        SONG="track"
        PLAYLIST="playlist"

    @classmethod
    def call(self, search_string, options):
        base_url = "https://api.spotify.com/v1/search?"

        self.access_token = self.get_access_token()

        search_string = urllib.parse.quote(search_string)

        url = base_url + "q=" + search_string.lower() + "&type=" + options.value

        header = {
            'Authorization': 'Bearer ' + self.access_token
        }

        response = requests.get(url, headers=header)

        print(response)

        return response

    @classmethod
    def get_access_token(cls):
        if cls.access_token == '':
            from django.conf import settings
            import base64
            token_url = 'https://accounts.spotify.com/api/token'

            body_params = {
                'grant_type': 'client_credentials'
            }

            base64_header = base64.b64encode((settings.SPOTIPY_CLIENT_ID + ':' + settings.SPOTIPY_CLIENT_SECRET).encode('ascii'))
            base64_header_str = base64_header.decode('utf-8')
            header = {
                'Authorization': 'Basic ' + base64_header_str
            }

            autorize = requests.post(url=token_url, headers=header, data=body_params)

            content = autorize.json()
            cls.access_token = content['access_token']
            print(cls.access_token)

        return cls.access_token

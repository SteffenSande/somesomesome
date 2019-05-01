import requests


class AccessToken:
    access_token = ''

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

        return cls.access_token

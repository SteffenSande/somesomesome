# System for creating a dynamic queue for the popular music streaming service Spotify

## Find website at [by clicking here](https://somesomesome.herokuapp.com/).



## Setup
First clone repo
```
git@github.com:SteffenSande/somesomesome.git
```
### Dependencies 
Install virtualenv however your operation system does intallations.
For Ubuntu run
~~~
sudo apt install virtualenv
~~~

Then create a virtual environment for the python dependencies.

~~~
virtualenv -p python3 venv
~~~

Now a virtual environment with python3 runtime is ready to be activated. 

To activate it you only have to source the avtivate script. 
**Important for windows users: it might be called venv/activate without bin**
~~~
source venv/bin/activate
~~~

Now install all the dependencies listed in the requirements.txt file.

~~~
pip install -r requirements.txt
~~~

## Contributing
If you want some functionality or want to edit existing functionality do the following:

* Create an issue
* Checkout a branch from that issue
* Create a pull request
* Another developer will then review it
* Feature is added or feature needs more work

## How to run the application locally

The project is devided into fronend and backend.

### Frontend
In the root directory of the project run `yarn dev` or `npm run dev` to compile react. 
React code is found in the folder `frontend/src/`

### Backend
Do setup explained above and then run `./manage.py runserver` to start the server. 

It uses the static javascript files which again is transpiled from typescript with `yarn dev`

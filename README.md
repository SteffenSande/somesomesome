# System for creating a dynamic queue for the popular music streaming service Spotify

## Setup
First clone repo
```
git@github.com:SteffenSande/somesomesome.git
```
### Dependencies 
Install virtualenv however your operation system does intallations.
For Ubuntu run
```
sudo apt install virtualenv
```

Then create a virtual environment for the python dependencies.

```
virtualenv -p python3 venv
```

Now a virtual environment with python3 runtime is ready to be activated. 

To activate it you only have to source the avtivate script. 
**Important for windows users: it might be called venv/activate without bin**
```
source venv/bin/activate
```

Now install all the dependencies listed in the requirements.txt file.

```
pip install -r requirements.txt
```

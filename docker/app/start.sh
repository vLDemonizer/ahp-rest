#!/bin/bash

cd /root/

pip install -r requirements.txt

cd ahp_rest

python manage.py makemigrations --noinput

python manage.py migrate --noinput

python manage.py collectstatic --noinput

env > /etc/environment

supervisord -n
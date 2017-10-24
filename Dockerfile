FROM ubuntu:16.04

RUN apt-get update --fix-missing && \
    apt-get install -y \
        git \
        curl \
        python-pip \
        python-psycopg2 \
        supervisor \
        vim

RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get install nodejs

RUN npm install -g --save-dev babel-cli

RUN npm install --save-dev webpack

RUN service supervisor stop

ADD /docker/app/supervisor.conf /etc/supervisor/conf.d/auth-api.conf

ADD ./requirements.txt /root/requirements.txt

RUN pip install -r /root/requirements.txt

WORKDIR /root/ahp_rest/

ADD /docker/app/start.sh /root/start.sh

RUN chmod 700 /root/start.sh

ADD . /root/

EXPOSE 80

CMD ["/root/start.sh"]


FROM mhart/alpine-node:6.5

MAINTAINER PRX <sysadmin@prx.org>
LABEL org.prx.app="yes"

ENV TINI_VERSION v0.9.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini

WORKDIR /app
EXPOSE 4040

ADD . ./

RUN npm install

ENTRYPOINT ["/tini", "--", "./bin/application"]
CMD [ "serve" ]

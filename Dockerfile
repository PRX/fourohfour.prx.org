FROM mhart/alpine-node:6.5

MAINTAINER PRX <sysadmin@prx.org>
LABEL org.prx.app="yes"

# Add Tini
ENV TINI_VERSION v0.14.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini /tini
RUN chmod +x /tini

WORKDIR /app
EXPOSE 4040

ADD . ./

RUN npm install

ENTRYPOINT ["/tini", "--"]
CMD ["./bin/application"]

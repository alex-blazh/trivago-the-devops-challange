#!/bin/sh

IMAGENAME="quay.io/alex_blazh/trivago-the-devops-challenge-traefik:1.7.9-alpine"

docker build -t ${IMAGENAME} "${0%/*}"
docker push ${IMAGENAME} 
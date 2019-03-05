#!/bin/sh

IMAGENAME="quay.io/alex_blazh/trivago-the-devops-challenge-postgres:10.7-alpine"

docker build -t ${IMAGENAME} "${0%/*}"
docker push ${IMAGENAME} 
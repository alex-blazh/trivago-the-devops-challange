#!/bin/sh

IMAGENAME="quay.io/alex_blazh/trivago-the-devops-challenge-logspout:v3.2.6"

docker build -t ${IMAGENAME} "${0%/*}"
docker push ${IMAGENAME} 
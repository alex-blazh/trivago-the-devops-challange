#!/bin/sh

IMAGENAME="quay.io/alex_blazh/trivago-the-devops-challenge-kibana:6.6.1"

docker build -t ${IMAGENAME} "${0%/*}"
docker push ${IMAGENAME} 
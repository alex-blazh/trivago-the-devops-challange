# Answers #

− How would you update a concrete artifactinside the web server layer?

`After every commit to the repository Jenkins will rebuild docker image for web-app, push it to registry and upgrade the servies with new artifacts`

− How would you assure HA for the whole application?

`Now HA is realised only for web server layer by sciling it and distributing to several nodes. In case when some nodes or apps itsef will have some problems load balancer will send requests to working ones and wsarm will recreate desired amount of container on working nodes. To improve rellayability we need to set HA for load balancer itself and for datadase service also.`

− How would you improve your solution? Mention next steps to be considered.

## Main application stack ##

- Add SSL termination for web application
- Limit resources for services for more predictable service scheduling
- Setup health checks for all services
- Setup Traefic or any other lead balancer in HA mode
- Setup auto scaling for worker nodes and services
- Setup storage for sensitive data passwords, api keys and so on
- Setup backup
- Setup database in HA mode
- Add dependent services availability check, to start services in proper order, and reconfigure them if configuration will be changed

## Logging ##

- Setup logstash config to parse all logs from different services
- Restrict access to Kibana by X-Pack, proxy with auth ot at least by firewall
- Create dashboards for kibana
- Add elastic-curator to clean old data from database
- Setup alarms with X-Pack or elastalert
- Store config for all ELK services in one image with volumes

## CI/CD ##

- Setup notification about filed/successful builds and deployments
- Setup automated tests for new deployments
- Add versioning to docker tags based on branch names and build numbers

## Monitoring ##

- Add some monitoring stack like TIG, Prometheus or at least some bits from elastic

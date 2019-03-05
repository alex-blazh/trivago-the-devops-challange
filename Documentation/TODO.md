# Improvement proposition #

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

## Monitoring ##

- Add some monitoring stack like TIG, Prometheus or at least some bits from elastic

## CI/CD ##

- Setup notification about filed/successful builds and deployments
- Setup automated tests for new deployments
- Add versioning to docker tags based on branch names and build numbers



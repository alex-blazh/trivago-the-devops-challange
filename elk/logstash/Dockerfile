FROM logstash:6.6.1

LABEL Author="Oleg Blazhyievskyi <Oleg.Blazhyievskyi@gmail.com>"

RUN rm -f /usr/share/logstash/pipeline/logstash.conf
ADD pipeline/ /usr/share/logstash/pipeline/
ADD config/ /usr/share/logstash/config/
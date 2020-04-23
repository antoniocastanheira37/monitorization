FROM docker.elastic.co/logstash/logstash:7.3.1

RUN bin/logstash-plugin install logstash-input-http
RUN bin/logstash-plugin install logstash-input-beats
RUN bin/logstash-plugin install logstash-output-elasticsearch

RUN rm -f /usr/share/logstash/pipeline/logstash.conf
COPY pipeline /usr/share/logstash/pipeline/
COPY config /usr/share/logstash/config

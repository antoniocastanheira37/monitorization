FROM docker.elastic.co/beats/metricbeat:7.3.1

COPY metricbeat.yml /usr/share/metricbeat/metricbeat.yml
USER root
RUN chown -R root /usr/share/metricbeat
RUN chmod -R go-w /usr/share/metricbeat/

FROM docker.elastic.co/elasticsearch/elasticsearch:7.3.1

COPY sg/ config/sg/
COPY bin/ bin/

RUN bin/elasticsearch-plugin install -b https://releases.floragunn.com/search-guard-7/7.3.1-37.0.0/search-guard-7-7.3.1-37.0.0.zip \
    && chmod +x plugins/search-guard-7/tools/*.sh \
	&& chown -R elasticsearch config/sg/ \
	&& chmod -R go= config/sg/
	
ENV JAVA_HOME /usr/share/elasticsearch/jdk


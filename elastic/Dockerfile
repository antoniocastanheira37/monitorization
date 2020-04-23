FROM docker.elastic.co/elasticsearch/elasticsearch:7.3.1

COPY bin/ bin/
COPY sg/ config/sg/

COPY config.yml .

RUN bin/elasticsearch-plugin install -b https://releases.floragunn.com/search-guard-7/7.3.1-37.0.0/search-guard-7-7.3.1-37.0.0.zip \
    && chmod +x plugins/search-guard-7/tools/*.sh 
RUN yum install unzip wget -y
RUN wget "https://releases.floragunn.com/search-guard-tlstool/1.7/search-guard-tlstool-1.7.zip"  \
    && unzip search-guard-tlstool-1.7.zip \
    && rm search-guard-tlstool-1.7.zip

ENV JAVA_HOME /usr/share/elasticsearch/jdk

RUN tools/sgtlstool.sh -c ./config.yml -ca -crt -t /usr/share/elasticsearch/config




FROM postgres

ENV POSTGRES_DB pce
ENV POSTGRES_PASSWORD pce
ENV POSTGRES_USER pce

COPY init.sql /docker-entrypoint-initdb.d/

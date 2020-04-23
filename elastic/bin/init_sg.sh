#!/usr/bin/env sh

plugins/search-guard-7/tools/sgadmin.sh \
	-cd config/sg/ -icl -nhnv \
   -cacert /usr/share/elasticsearch/config/root-ca.pem \
   -cert /usr/share/elasticsearch/config/kirk.pem \
   -key /usr/share/elasticsearch/config/kirk.key \
   -keypass certificate-password

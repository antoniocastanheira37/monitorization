# monitorization

This is the repository of the monitorization tool for the AIDA platform.

##Installation
Use docker compose, inside the repository folder, to run the tool.

```bash
docker-compose up --build
```

After running the tool, if it is the first time runnning the tool, it's necessary to install the Search Guard plugin for ElasticSearch. For that, verify if ElasticSearch is already running by accessing [localhost:9000](http://localhost:9000) and, after obtaining an afirmative answer, open a second terminal window, at the repository folder, to run

```bash
docker-compose exec -T elasticsearch bin/init_sg.sh
```

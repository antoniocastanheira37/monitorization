CREATE TABLE IF NOT EXISTS hl7envia (
msgid varchar PRIMARY KEY,
origem varchar NOT NULL,
destino varchar NOT NULL,
evn varchar NOT NULL,
dataenv timestamp NOT NULL,
dataack timestamp DEFAULT NOW(),
episodio integer NOT NULL);

CREATE TABLE IF NOT EXISTS hl7receb (
msgid varchar PRIMARY KEY,
origem varchar NOT NULL,
destino varchar NOT NULL,
evn varchar NOT NULL,
datarec timestamp NOT NULL,
dataack timestamp DEFAULT NOW(),
episodio integer NOT NULL)

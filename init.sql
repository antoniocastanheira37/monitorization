CREATE TABLE IF NOT EXISTS messages (
msgid varchar PRIMARY KEY,
origem varchar NOT NULL,
destino varchar NOT NULL,
evn varchar NOT NULL,
dataenv timestamp NOT NULL,
dataack timestamp DEFAULT NOW(),
episodio integer NOT NULL)

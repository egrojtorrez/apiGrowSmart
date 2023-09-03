BEGIN;

CREATE TABLE IF NOT EXISTS public.usuario
(
    "idUsuario" serial NOT NULL,
    correo character varying(255)[] NOT NULL,
    password character varying(255)[] NOT NULL,
    nombre character varying(40)[],
    imagen text,
    PRIMARY KEY ("idUsuario"),
    CONSTRAINT correo UNIQUE (correo)
);

CREATE TABLE IF NOT EXISTS public.dispositivos
(
    "idDispositivo" serial NOT NULL,
    alias character varying(20)[] NOT NULL,
    "nombrePlanta" character varying(20)[],
    enlazado boolean NOT NULL,
    activo boolean NOT NULL,
    estado bit(2)[] NOT NULL,
    "idUsuario" integer NOT NULL,
    imagen text,
    "humedadMin" real,
    "humedadMax" real,
    "temperaturaMin" real,
    "temperaturaMax" real,
    PRIMARY KEY ("idDispositivo")
);

CREATE TABLE IF NOT EXISTS public.estadisticas
(
    "idDispositivo" integer NOT NULL,
    "updateTime" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    humedad real NOT NULL,
    temperatura real NOT NULL,
    PRIMARY KEY ("idDispositivo", "updateTime")
);

ALTER TABLE IF EXISTS public.dispositivos
    ADD CONSTRAINT "FK_IdUsuario" FOREIGN KEY ("idUsuario")
    REFERENCES public.usuario ("idUsuario") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;


ALTER TABLE IF EXISTS public.estadisticas
    ADD CONSTRAINT "FK_idDispositivo" FOREIGN KEY ("idDispositivo")
    REFERENCES public.dispositivos ("idDispositivo") MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

END;
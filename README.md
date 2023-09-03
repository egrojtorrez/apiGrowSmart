# GrowSmartApi
API Rest-WebSocket para el proyecto GrowSmart de la asignatura Tecnologias Emergentes

## Pre-requisitos 📋
### Producción
- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
### Desarrollo
- [NodeJS v18](https://nodejs.org/es/) (Extra para agilizar el desarrollo)

## Instalación 🔧
### Producción
1. Clonar el repositorio
2. Crear las variables de entorno (Seguir el ejemplo del archivo .env.example)
3. Ejecutar el comando `docker-compose --profile production up -d --build`
4. Crear la base de datos con el archivo init.sql en la carpeta database
5. Usar la API
### Desarrollo
1. Clonar el repositorio
2. Crear archivo .env con las variables de entorno (Seguir el ejemplo del archivo .env.example)
3. Ejecutar el comando `npm install`
4. Ejecutar el comando `docker-compose --profile dev up -d`
5. Crear la base de datos con el archivo init.sql en la carpeta database (Puedes ayudarte de la interfaz de PGAdmin)
6. Ejecutar el comando `npm run dev`
7. Usar la API

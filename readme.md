### Instrucciones para levantar el proyecto backend

- Para utilizar este proyecto es necesario levantar todos los servicios de docker:

`docker-compose build`

`docker-compose up -d`

- Una vez levantado es necesario correr el script de migración para levantar todas las tablas necesarias de nuestra base de datos.

`npx knex migrate:latest`

Si genera error al momento de ejecutar la migración, habra que verificar que las tablas se hayan inicializado correctamente.

- users
- user_credentials

Si se desea desarrollar nuevas funcionalidades para el proyecto, es necesario tener instalado lo siguiente:

- Docker (si tienes windows, importante tener WSL)
- NodeJS


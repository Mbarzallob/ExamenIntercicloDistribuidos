
# Mateo Barzallo
## Documentacion Examen interciclo

Instalacion

1. Una vez ya tengamos clonado el repositorio, lo que tendremos que hacer es en el proyecto angular y en el del servidor, descargar todas las librerias, para esto usamos el 
 - "npm install"

Una vez ya tengamos todas las librerias descargadas de los dos proyectos, podremos continuar con la compilacion para el docker compose, esto lo realizamos de la siguiente manera, con los siguientes comandos:

- "docker-compose build"
- "docker-compose up"

Para poder visualizar el front-end hecho en angular, tendremos que ingresar al "http://localhost:80", en el cual tenemos un input y un boton, en el cual al hacer click se enviara al websocket y se nos devolvera el mensaje que hayamos enviado como un listado de los mismos


Links de contenedor servidor: 
https://hub.docker.com/r/mbarzallob/server
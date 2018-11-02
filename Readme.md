# Servidor en nodejs empleando MVC

Codigo base de un servidor en nodejs para ver como se estructura y distribuyen los archivos en un MVC.

# Instrucciones

1. Instalar [mongoDB](https://www.mongodb.com/download-center?jmp=nav#community).
2. Instalar [Node.js](https://nodejs.org/es/).
3. `npm install` para instalar dependencias del proyecto.
4. `npm start` o `node app.js` para iniciar la aplicación.

### Estructura

```
    .
    ├── server              # Archivos del servidor.
    │   ├── config          # Archivos de configuracion y variables de entorno.
    │   ├── controller      # Carpeta con controladores de la aplicacion.
    │   ├── models          # Schemas/esquemas de datos de la BD.
    │   ├── routes          # Archivos con las vistas.
    ├── package.json        # Archivo de paquetes npm.
    └── Readme.md
```

## FAQ

### Creación del archivo package.json

1. `npm init` para crear el package.json
2. `npm install express --save` para instalar modulo express.
3. `npm install body-parser --save` para poder conseguir de manera facil los datos enviados por formularios.
4. `npm install mongoose --save` para instalar libreria de trabajo con mongoDB.
5. `npm install mongoose-unique-validator --save` para modificar mensajes de error de inserciones en la base de datos.
6. `npm install bcrypt --save` para poder encriptar las contraseñas de usuario de la BD.
7. `npm install underscore --save` para poder filtrar objetos de manera mas eficiente.

### Herramienta para testeo.
* Instalar [https://www.getpostman.com/apps](https://www.getpostman.com/apps) para enviar diferentes metodos HTTP.

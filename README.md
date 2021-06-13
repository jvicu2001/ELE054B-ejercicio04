
Repositorio para **[La Fiesta de la Programación - Spring Boot y Mongo DB](https://youtu.be/BgAdXIjbNSY)**

## Instalaciones para react

Creacion de Proyecto

```bash
    npx create-react-app medicionplantasweb
```

Dependencias necesarias

```bash
    npm install react-router-dom
    npm install bootstrap
    npm install node-sass
    npm install primereact --save
    npm install primeicons --save
```


## Queries básicas de mongoDB 
---
### Crear una base de datos

```js
use nombreBD
```

### Insertar elementos
* [db.coleccion.insertOne(document)](https://docs.mongodb.com/manual/reference/method/db.collection.insertOne/)
```js
db.coleccion.insertOne({nombre:"Seba", nota1:5.6, nota2:7.0})`  
```
* [db.coleccion.insertMany([...documents], options)](https://docs.mongodb.com/manual/reference/method/db.collection.insertMany/)
```js
db.coleccion.insertMany([{nombre:'asd'},{apellido:'asdasd'}])
```

### Traer todos
* [db.coleccion.find(query, projection)](https://docs.mongodb.com/manual/reference/method/db.collection.find/)
> projection: campos que deseas obtener del documento, omitir para traer todos los campos. 
```js
db.coleccion.find({})
```

### Eliminar todos los documentos de una colección
* [db.coleccion.deleteMany(filter, options)](https://docs.mongodb.com/manual/reference/method/db.collection.deleteMany/)
```js
db.mediciones.deleteMany({})
```

### Actualizar documentos de una colección
* [ db.collection.updateMany(filter, update, options)](https://docs.mongodb.com/manual/reference/method/db.collection.updateMany/#db.collection.updateMany)
```js
db.collection.updateMany({nombre: 'Seba'}, {hasVirginProtection: true})
```
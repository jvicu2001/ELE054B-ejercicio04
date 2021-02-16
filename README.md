
#Crear una base de datos
use nombreBD

#Insertar elementos
db.coleccion.insertOne({nombre:"Seba", nota1:5.6, nota2:7.0})
#insertMany([{nombre:'asd'},{apellido:'asdasd'}])

#Traer todos
db.coleccion.find({})

#Eliminar todos los documentos de una coleccion

db.mediciones.deleteMany({})
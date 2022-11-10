// 1 Importamos dependencias de EXPRESS || librería que precisemos
const express = require('express');

//2 Ejecuto las funciones de express en la variable
const app = express();

const mysql = require('mysql2'); 

//3 Establezco el puerto para la escucha de mi servidor
const PORT = 3000;

//4 Respuesta al cliente (frontend)
app.get('/', (req, res)=> {
    res.send(`<h1>Bienvenido a mi sitio<\h1>`)
  });

app.get();//select 
app.post();//insert
app.update();//update
app.delete();//delete

 //5 Conectamos a base de datos
const conexion = mysql.createConnection({
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'c0m03nc4s4'
    }
);

conexion.connect((error)=>{
    if(error){
        console.log(`El error es: ${error}`)
    }
    else
    {
        console.log("Conectado a la base de datos");
    }
    
});

app.listen(PORT, ()=> {
    console.log(`Servidor trabajando en el puerto ${PORT}`)
});



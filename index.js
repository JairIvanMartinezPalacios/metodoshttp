const express = require('express')

const app = express()
/*
app.get('/', (request, response)=> {
    response.send('Hello world from Express!')
})
*/

/* METODOS CON SEND PARA GET, POST, PUT, PATCH Y DELETE */
ss
/*
    app.get('/',(request, response)=>{
        response.send({msg: 'Hello GET'})
})

app.post('/',(request, response)=>{
    response.send({msg: 'Hello POST'})
})

app.put('/',(request, response)=>{
    response.send({msg: 'Hello PUT'})
})

app.patch('/',(request, response)=>{
    response.send({msg: 'Hello PATCH'})
})

app.delete('/',(request, response)=>{
    response.send({msg: 'Hello DELETE'})
})
*/


/* METODOS CON json PARA GET, POST, PUT, PATCH Y DELETE */

app.get('/',(req, res)=>{
    res.json({msg: 'Hello GET'})
})

app.post('/',(req, res)=>{
res.json({msg: 'Hello POST'})
})

app.put('/',(req, res)=>{
res.jspn({msg: 'Hello PUT'})
})

app.patch('/',(req, res)=>{
res.json({msg: 'Hello PATCH'})
})

app.delete('/',(req, res)=>{
res.json({msg: 'Hello DELETE'})
})


/*
*
*
*     FUNCIONALIDAD
*
*/
/*http://localhost:3000/ */

app.listen(3000,()=>{
    console.log('listening on port 3000')
})
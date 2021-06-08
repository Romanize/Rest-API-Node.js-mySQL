const express = require('express')
const morgan = require('morgan')
const mysql = require('mysql')
const myConnection = require('express-myconnection')

const app = express();

//Router config
const userRoutes = require('./routes/users')

//Server config
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');

//Middlewares
app.use(morgan('dev'))

app.use(myConnection(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    port: 3306,
    database: 'testDB'
}, 'single'))

app.use(express.json())

//Routes
app.use('/',userRoutes)
app.use('/:id',userRoutes)

//Server start
let port = app.get('port')

app.listen(port,()=>{
    console.log(`server on port ${port}`)
})


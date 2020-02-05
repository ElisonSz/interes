/*DEPENDENCIAS*/
const express = require('express');
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mysql = require('mysql');
const myconnetion = require('express-myconnection');
const dotenv = require('dotenv');
const path = require('path')
const cors = require('cors')
const app = express();
dotenv.config();
/* Rutes*/

const InteresRoutes = require('./routes/Interes/interes')
/* midlerwares*/
const corsOptions = {
    origin:"*",
    optionsSuccessStatus:200
}

app.use(bodyParser.json())
app.use(morgan('dev'))
app.use(cors(corsOptions))
/*rutes */

app.use('/api',InteresRoutes);

/*Conexion DB*/


/*carpetas publicas */
app.use(express.static(path.join(__dirname,'public')))

app.listen(process.env.PORT||4000, (req,res)=>{
    console.log('server on port:',process.env.PORT);
    console.log('http://localhost:',process.env.PORT);
});

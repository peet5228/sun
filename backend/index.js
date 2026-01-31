require('dotenv').config()
const express = require('express')
const filupload = require('express-filupload')
const app = express()
const path = require('path')
const cors = require('cors')

app.use(cors ({
    origin:'http://localhost:3000',
    credentials: true
}))

app.use(express.json())
app.use(filupload())
app.use('/uploads',express.static(path.join(__dirname,'uploads')))

// Endpoint Public API

// Block 404  res:message
app.use((req,res) => res.status(404).json({message:'Route not found'}))

// Listen Port
app.listen(3001 , () => console.log('Server running on port 3001'))
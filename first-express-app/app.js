const express = require('express')

const app = express()

// Static resources
app.use(express.static('public'))

// Endpoints
app.get('/', (req, res) => {

    console.log('__dirname es el path absoluto al archivo usado:', __dirname)
    res.sendFile(`${__dirname}/views/index-page.html`)
})


app.get('/sir', (req, res) => {

    res.sendFile(`${__dirname}/views/sir-page.html`)
})


app.listen(3000, () => console.log("Servidor levantado en el puerto 3000"))
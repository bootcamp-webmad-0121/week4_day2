const http = require('http')

const server = http.createServer((req, res) => {

    if (req.url === '/') res.write('<h1>Bienvenid@ a la tienda!!</h1>')
    else if (req.url === '/productos') res.write('<h1>Aquí van los productos</h1>')
    else if (req.url === '/contacto') res.write('<h1>Aquí puedes contactar con nosotr@s</h1>')
    else {
        res.statusCode = 404
        res.write('<h1>Esto es un NOT FOUND como la copa de un pino</h1>')
    }
    res.end()
})

server.listen(3000, () => console.log('Servidor levantado en el puerto 3000'))
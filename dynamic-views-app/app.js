const express = require('express')
const app = express()


// Setup
app.use(express.static('public'))
app.set('views', `${__dirname}/views`)
app.set('view engine', 'hbs')



// Endpoints
app.get('/', (req, res) => res.render('index-page'))

app.get('/detalles-reserva', (req, res) => {

    const data = {
        name: 'Alenjandro',
        lastName: 'Herrero',
        bootcamp: 'Web development (<em>Web Dev</em>)',
        campus: 'Madrid',
        address: {
            street: 'Cada del Lector, Matadero',
            code: 83783
        },
        price: 7000,
        payed: false,
        subjects: ['HTML', 'CSS', 'JS', 'EXPRESSJS', 'REACT', 'NODE', 'MONGODB']
    }

    res.render('booking-details', data)
})


// Listen
app.listen(3000, () => console.log("servidor levantado!"))
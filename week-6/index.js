const express = require('express')
const indexRouter = require('./routes/index')
const passengersRouter = require('./routes/passengers')
const driversRouter = require('./routes/drivers')
const bookingsRouter = require('./routes/bookings')
const bodyParser = require('body-parser')
require('./mongo-connection')
const app = express()
const port = 3000

app.use(bodyParser.json())
app.set('view engine', 'pug')

// bunlar için de araya bir middleware eklense iyi olur
app.use('/', indexRouter)
app.use('/passengers', passengersRouter)
app.use('/drivers', driversRouter)
app.use('/bookings', bookingsRouter)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
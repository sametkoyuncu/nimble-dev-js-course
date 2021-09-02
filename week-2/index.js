const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const indexRouter = require('./routes/index')
const passengersRouter = require('./routes/passengers')
const driversRouter = require('./routes/drivers')
const bookingsRouter = require('./routes/bookings')

require('./mongo-connection')
const app = express()

app.use(bodyParser.json())
app.use(cors())
app.set('view engine', 'pug')

// bunlar için de araya bir middleware eklense iyi olur
app.use('/', indexRouter)
app.use('/passengers', passengersRouter)
app.use('/drivers', driversRouter)
app.use('/bookings', bookingsRouter)

//for testing
module.exports = app
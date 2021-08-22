const express = require('express')
const bodyParser = require('body-parser')
const flatted = require('flatted')
const { passengerDatabase, driverDatabase } = require('./database')
const app = express()
const port = 3000

app.use(bodyParser.json(    ))

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/passengers', async (req, res) => {
    const passengers = await passengerDatabase.load()
    // res.send(flatted.stringify(passengers))
    res.render('passengers', { passengers })
})

app.post('/passengers', async (req, res) => {
    const passenger = await passengerDatabase.insert(req.body)

    res.send(passenger)
})

app.delete('/passengers/:passengerId', async (req, res) => {
    await passengerDatabase.removeBy('id', req.params.passengerId)

    res.send('OK')
})

app.get('/passengers/:passengerId', async (req, res) => {
    const passenger = await passengerDatabase.find(req.params.passengerId)
    if(!passenger) return res.status(404).send('Cannot find passenger')
    
    res.render('passenger', { passenger })
})

app.post('/passengers/:passengerId/bookings', async (req, res) => {
    const { passengerId } = req.params
    const { driverId, origin, destination } = req.body

    const passenger = await passengerDatabase.find(passengerId)
    if (!passenger) return res.status(404).send('Cannot find passenger')

    const driver = await driverDatabase.find(driverId)
    if (!driver) return res.status(404).send('Cannot find driver')

    passenger.book(driver, origin, destination)
    //BookingService.createBooking(passengerId, driverId, origin, destination)

    await passengerDatabase.update(passenger)

    res.send(flatted.stringify(passenger))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
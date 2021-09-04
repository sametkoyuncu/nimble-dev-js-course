const flatted = require('flatted')
const { passengerService } = require('../services')
const booking = require('../models/booking')

const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send(await passengerService.load())
    // return html or json type
    // const passengers = await passengerService.load()
    // const type = req.query.type || 'json'

    // if (type == 'json') res.send(passengers)
    // else res.render('passengers', { passengers })
})

router.post('/', async (req, res, next) => {
    try {
        const passenger = await passengerService.insert(req.body)
        res.send(passenger)
    } catch (error) {
        next(error)
    }
})

router.delete('/:passengerId', async (req, res) => {
    await passengerService.removeBy('_id', req.params.passengerId)

    res.send('OK')
})

router.get('/:passengerId', async (req, res) => {
    const passenger = await passengerService.find(req.params.passengerId)
    if (!passenger) return res.status(404).send('Cannot find passenger')

    res.send(passenger)
    // res.render('passenger', { passenger })
})

router.post('/:passengerId/bookings', async (req, res) => {
    const { passengerId } = req.params
    const { driverId, origin, destination } = req.body

    const booking = await passengerService.book(driverId, passengerId, origin, destination)
    //BookingService.createBooking(passengerId, driverId, origin, destination)

    res.send(booking)
})

router.patch('/:passengerId', async (req, res) => {
    const { name } = req.body
    const { passengerId } = req.params

    await passengerService.update(passengerId, { name })
})

module.exports = router
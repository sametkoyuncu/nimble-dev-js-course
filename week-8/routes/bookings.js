const { bookingService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const bookings = await bookingService.load()
    res.render('bookings', { bookings })
})

router.get('/search', async (req, res) => {
    const driverId = req.query.driverId
    const bookings = await bookingService.findByDriverId(driverId)

    res.render('bookings', { bookings })
})

module.exports = router
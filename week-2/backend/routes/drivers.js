const { driverService } = require('../services')

const router = require('express').Router()

router.get('/', async (req, res) => {
    res.send(await driverService.load())
    // const drivers = await driverService.load()
    // res.render('drivers', { drivers })
})

router.post('/', async (req, res) => {
    const driver = await driverService.insert(req.body)

    res.send(driver)
})

router.delete('/:driverId', async (req, res) => {
    const {driverId} = req.params
    await driverService.removeBy('_id', driverId)

    res.send('OK')
})

router.get('/:driverId', async (req, res) => {
    const { driverId } = req.params
    const driver = await driverService.find(driverId)
    if (!driver) return res.status(404).send('Cannot find driver')

    res.render('driver', { driver })
})

router.patch('/:driverId', async (req, res) => {
    const { name } = req.body
    const { driverId } = req.params

    await driverService.update(driverId, { name })
})

module.exports = router
const BaseService = require('./base-service')
const bookingService = require('./booking-service')
const driverService = require('./driver-service')
const Passenger = require('../models/passenger')

class PassengerService extends BaseService {
    async findByName(name) {
        return this.findBy('name', name)
    }

    async book(driverId, passengerId, origin, destination) {
        const passenger = await this.find(passengerId)
        if (!passenger) return res.status(404).send('Cannot find passenger')

        const driver = await driverService.find(driverId)
        if (!driver) return res.status(404).send('Cannot find driver')

        const booking = await bookingService.insert({ driver, passenger, origin, destination })
        passenger.bookings.push(booking)
        await passenger.save()
        return booking
    }
}
 
module.exports = new PassengerService(Passenger)
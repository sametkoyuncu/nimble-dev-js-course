const Booking = require('./booking')

class Passenger {
    constructor(name, location) {
        this.name = name
        this.location = location
        this.bookings = []
    }

    book(driver, origin, destination) {
        const booking = new Booking(driver, origin, destination, this)
        this.bookings.push(booking)

        return booking
    }

}

module.exports = Passenger
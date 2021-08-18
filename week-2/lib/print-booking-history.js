const colors = require('colors')

function printBooking(booking) {
    console.log(`${booking.passenger.name.blue} boked ${booking.driver.name.green} to travel from ${booking.origin.bgRed.white} to ${booking.destination.bgWhite.red}.`)
}

function printBookingHistory(passenger) {
    // if (passenger.bookings.length == 0)
    //     return console.log(`${colors.blue(passenger.name)} has no bookings yet.`)
    passenger.bookings.forEach(printBooking)
}

module.exports = printBookingHistory
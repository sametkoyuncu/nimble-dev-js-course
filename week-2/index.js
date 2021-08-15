const colors = require('colors')

const Passenger = require('./passenger')
const Driver = require('./driver')

function printBooking(booking) {
    console.log(`${booking.passenger.name.blue} boked ${booking.driver.name.green} to travel from ${booking.origin.bgRed.white} to ${booking.destination.bgWhite.red}.`)
}

const samet = new Passenger('Samet', 'Yalova')
const stefan = new Driver('Stefan', 'Yalova Sahil')

samet.book(stefan, 'Yalova', 'Bursa')
samet.book(stefan, 'Bursa', 'Ankara')
samet.book(stefan, 'Ankara', 'Sivas')

// stefan.drive(bookingFromYalovaToBursa.origin)
// stefan.pickUp(samet)
// stefan.drive(bookingFromYalovaToBursa.destination)
// samet.endBooking(bookingFromYalovaToBursa)

// console.log(`${samet.name} has ${samet.bookings.length} booking(s).`)
// console.log(`${samet.name} wants to travel from ${samet.bookings[0].origin} to ${samet.bookings[0].destination}.`)

// printBooking(booking1)
// printBooking(booking2)
// printBooking(booking3)

function printBookingHistory(passenger) {
    passenger.bookings.forEach(printBooking)
}

printBookingHistory(samet)
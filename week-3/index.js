const colors = require('colors')
const Passenger = require('./passenger')
const Driver = require('./driver')
const { passengerDatabase, driverDatabase } = require('./database')

function printBooking(booking) {
    console.log(`${booking.passenger.name.blue} boked ${booking.driver.name.green} to travel from ${booking.origin.bgRed.white} to ${booking.destination.bgWhite.red}.`)
}

function printBookingHistory(passenger) {
    // if (passenger.bookings.length == 0)
    //     return console.log(`${colors.blue(passenger.name)} has no bookings yet.`)
    passenger.bookings.forEach(printBooking)
}

// const samet = Passenger.create({ name: 'Samet', location: 'Yalova' })
// const betul = Passenger.create({ name: 'Betül', location: 'Bilecik' })
const stefan = Driver.create({ name: 'Stefan', location: 'Yalova Sahil' })

// samet.book(stefan, 'Yalova', 'Bursa')
// samet.book(stefan, 'Bursa', 'Ankara')
// samet.book(stefan, 'Ankara', 'Sivas')
// betul.book(stefan, 'Bilecik', 'Bursa')

// passengerDatabase.save([samet, betul])
// driverDatabase.save(stefan)

// passengerDatabase.insert('passengers', betul)


// passengerDatabase.remove('passengers', 1) //remove Betül

const samet = passengerDatabase.findByName('Samet')

printBookingHistory(samet)
samet.book(stefan, 'Edirne', "Tekirdağ")
passengerDatabase.update(samet)
console.log('<-- *** --- *** -->'.bgGreen.red.bold)
printBookingHistory(samet)
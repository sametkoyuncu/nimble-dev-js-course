const colors = require('colors')
const Passenger = require('./models/passenger')
const Driver = require('./models/driver')
const { passengerDatabase, driverDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

const samet = passengerDatabase.findByName('Samet')
const stefan = driverDatabase.findByName('Stefan')

samet.book(stefan, 'Yalova', 'Ankara')
passengerDatabase.update(samet)

printBookingHistory(samet)

// console.log(passengerDatabase.findBy('location', 'Yalova'))

// samet.book(stefan, 'Edirne', "Tekirdağ")
// passengerDatabase.update(samet)
// console.log('<-- *** --- *** -->'.bgGreen.red.bold)
// printBookingHistory(samet)
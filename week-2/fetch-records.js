const colors = require('colors')
const Passenger = require('./models/passenger')
const Driver = require('./models/driver')
const { passengerService, driverService } = require('./services')
const printBookingHistory = require('./lib/print-booking-history')
async function main() {
    try {
            const samet = await passengerService.findByName('Samet')
            // const stefan = driverService.findByName('Stefan')

            // samet.book(stefan, 'Yalova', 'Ankara')
            // passengerService.update(samet)

            printBookingHistory(samet)
            // console.log(samet)
        } catch (e) {
            return console.log(e)
        }
    }
    main()
// console.log(passengerService.findBy('location', 'Yalova'))

// samet.book(stefan, 'Edirne', "Tekirdağ")
// passengerService.update(samet)
// console.log('<-- *** --- *** -->'.bgGreen.red.bold)
// printBookingHistory(samet)
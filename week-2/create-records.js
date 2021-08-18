const Passenger = require('./models/passenger')
const Driver = require('./models/driver')
const { passengerDatabase, driverDatabase } = require('./database')
const printBookingHistory = require('./lib/print-booking-history')

const samet = Passenger.create({ name: 'Samet', location: 'Yalova' })
const betul = Passenger.create({ name: 'Betül', location: 'Bilecik' })
const stefan = Driver.create({ name: 'Stefan', location: 'Yalova Sahil' })

samet.book(stefan, 'Yalova', 'Bursa')
samet.book(stefan, 'Bursa', 'Ankara')
samet.book(stefan, 'Ankara', 'Sivas')
betul.book(stefan, 'Bilecik', 'Bursa')

console.log('start')
passengerDatabase.save([samet, betul], () => {
    console.log('wrote passenger')
    driverDatabase.save([stefan], () => {
        console.log('done')

        const mert = Passenger.create({ name: 'Mert', location: 'İzmir' })
        passengerDatabase.insert(mert, () => {
            const passengers = passengerDatabase.load((err, passengers) => {
                passengers.forEach(printBookingHistory)
            })
        })
    })
})





// passengerDatabase.remove('passengers', 1) //remove Betül

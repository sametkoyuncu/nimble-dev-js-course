const Passenger = require('./models/passenger')
const Driver = require('./models/driver')
const { passengerService, driverService } = require('./services')
const printBookingHistory = require('./lib/print-booking-history')

const samet = Passenger.create({ name: 'Samet', location: 'Yalova' })
const betul = Passenger.create({ name: 'Betül', location: 'Bilecik' })
const stefan = Driver.create({ name: 'Stefan', location: 'Yalova Sahil' })

samet.book(stefan, 'Yalova', 'Bursa')
samet.book(stefan, 'Bursa', 'Ankara')
samet.book(stefan, 'Ankara', 'Sivas')
betul.book(stefan, 'Bilecik', 'Bursa')

async function main() {
    try {
        await passengerService.save([samet, betul])
        await driverService.save([stefan])

        const mert = Passenger.create({ name: 'Mert', location: 'İzmir' })
        mert.book(stefan, 'Bilecik', 'İstanbul')

        await passengerService.insert(mert)
        
        const passengers = await passengerService.load()
        passengers.forEach(printBookingHistory)
    } catch (e) {
        return console.log(e)
    }    
}
main()

// passengerService.remove('passengers', 1) //remove Betül
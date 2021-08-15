//Driver
//Passenger
//Booking
function printBooking(booking) {
    console.log(`${booking.passenger.name} boked ${booking.driver.name} to travel from ${booking.origin} to ${booking.destination}.`)
}

class Driver {
    constructor(name, location) {
        this.name = name
        this.location = location
    }
}

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

    printBookingHistory() {
        this.bookings.forEach(printBooking)
    }
}

class Booking {
    constructor(driver, origin, destination, passenger) {
        this.driver = driver
        this.passenger = passenger
        this.origin = origin
        this.destination = destination
        this.state = "";
    }
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

samet.printBookingHistory()
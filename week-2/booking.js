class Booking {
    constructor(driver, origin, destination, passenger) {
        this.driver = driver
        this.passenger = passenger
        this.origin = origin
        this.destination = destination
        this.state = "";
    }
}

module.exports = Booking
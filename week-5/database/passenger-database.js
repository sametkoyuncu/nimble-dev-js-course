const BaseDatabase = require('./base-database')
const Passenger = require('../models/passenger')

class PassengerDatabase extends BaseDatabase {
    async findByName(name) {
        return (await this.load()).find(o => o.name == name)
    }
 }

module.exports = new PassengerDatabase(Passenger)
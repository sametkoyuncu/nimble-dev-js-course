const BaseService = require('./base-service')
const Driver = require('../models/driver')

class DriverService extends BaseService {
    async findByName(name) {
       return this.findBy('name', name)
    }

    async findByLocation(location) {
        return this.findBy('location', location)
    }
}

module.exports = new DriverService(Driver)
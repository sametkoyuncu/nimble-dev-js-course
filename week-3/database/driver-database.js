const BaseDatabase = require('./base-database')
const Driver = require('../driver')

class DriverDatabase extends BaseDatabase {
    findByName(name) {
        const objects = this.load()

        return objects.find(o => o.name == name)
    }
}

module.exports = new DriverDatabase(Driver)
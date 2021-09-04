const mongoose = require('mongoose')

const DriverSchema = new mongoose.Schema({
    name: String,
    age: { type: Number, required: true, min: 18 },
    location: String

})

module.exports = mongoose.model('Driver', DriverSchema)
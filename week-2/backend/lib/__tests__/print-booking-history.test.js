const colars = require('colors')
const printBookingHistory = require('../print-booking-history')

test.skip('prints passenger bookings when a passenger has a booking', () => {
    const passenger = {
        name: 'Samet',
        bookings: [{
            passenger: { name: 'Samet' },
            driver: { name: 'Ziya' },
            origin: 'Bursa',
            destination: 'Bilecik'
        }]
    }
    const consoleSpy = jest.spyOn(console, 'log')
    // const colorBlueSpy = jest.spyOn(colors, 'blue')
    
    expect(consoleSpy).toHaveBeenCalledWith('Samet booked Ziya to travel from Bursa to Bilecik.')
    consoleSpy.mockRestore()
})


test.skip('prints warning messages when a passenger has no booking', () => {
    const passenger = {
        name: 'Samet',
        bookings: []
    }
    const consoleSpy = jest.spyOn(console, 'log')
    // const colorBlueSpy = jest.spyOn(colors, 'blue')

    expect(consoleSpy).toHaveBeenCalledWith('Samet has no bookings yet.')
    consoleSpy.mockRestore()
})
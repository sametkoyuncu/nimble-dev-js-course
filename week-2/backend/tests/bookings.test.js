const app = require('../');
const request = require('supertest')(app);


test.skip('creates a new booking', async (done) => {
    const passnegerToCreate = {
        name: 'Test passenger',
        location: 'Aydın'
    }
    const driverToCreate = {
        name: 'Test driver',
        age: 20,
        location: 'İzmir'
    }
    const origin = 'İzmir'
    const destination = 'Muğla'

    const passengerResponse = await request
        .post('/passengers')
        .send(passnegerToCreate)
        .expect(200)
    
    const driverResponse = await request
        .post('/drivers')
        .send(driverToCreate)
        .expect(200)

    const bookingResponse = await request
        .post(`/passengers/${passengerResponse.body._id}/bookings`)
        .send({
            driverId: driverResponse.body._id,
            origin,
            destination
        })
        .expect(200)
    
    const bookingCreated = bookingResponse.body

    console.log('booking', bookingCreated)

    expect(bookingCreated).toMatchObject({
        driver: driverResponse.body,
        passenger: passengerResponse.body,
        origin,
        destination
    })

    done()
})
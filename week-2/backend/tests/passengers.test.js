const app = require('../');
const request = require('supertest')(app);


test.skip('creates a new passenger', async (done) => {
    const passengerToCreate = {
        name: 'Test passenger',
        location: 'İzmir'
    }

    const response = await request
        .post('/passengers')
        .send(passengerToCreate)
        .expect(200)


    expect(response.body).toMatchObject(passengerToCreate)

    done()
})
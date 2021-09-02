import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:3000'

Vue.use(Vuex)

const Mutations = {
  INCREMENT: 'INCREMENT',
  DECREMENT: 'DECREMENT'
}

export default new Vuex.Store({
  state: {
    count: 5
  },
  mutations: {
    [Mutations.INCREMENT] (state) {
      state.count++
    },
    [Mutations.DECREMENT] (state) {
      state.count--
    }
  },
  actions: {
    increment ({ commit }) {
      commit(Mutations.INCREMENT)
    },
    decrement ({ commit }) {
      commit(Mutations.DECREMENT)
    },
    async fetchPassengers () {
      const request = await axios.get('/passengers')
      return request.data
    },
    async fetchPassenger (ctx, passengerId) {
      const request = await axios.get(`/passengers/${passengerId}`)
      return request.data
    },
    async fetchDrivers () {
      const request = await axios.get('/drivers')
      return request.data
    },
    async bookDriver ({ dispatch }, { passengerId, driverId, origin, destination }) {
      const request = await axios.post(`/passengers/${passengerId}/bookings`, {
        driverId, origin, destination
      })

      return request.data
    }
  }
})

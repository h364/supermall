import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addToCart(state, payload) {
      let oldPrice = null
      for (let item of state.cartList) {
        if (item.iid == payload.iid) {
          oldPrice = item
        }
      }
      if (oldPrice) {
        oldPrice.count += 1
      } else {
        payload.count = 1
        state.cartList.push(payload)
      }
    }
  }
})

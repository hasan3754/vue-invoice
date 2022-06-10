import { createStore } from 'vuex'

export default createStore({
  state: {
    invoiceModal: null
  },
  mutations: {
    TOOGLE_INVOICE(state) {
      state.invoiceModal = !state.invoiceModal
    }
  },
  actions: {
  },
  modules: {
  }
})

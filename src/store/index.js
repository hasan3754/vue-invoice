import { createStore } from 'vuex'
import db from "../firebase/firebaseInit"

export default createStore({
  state: {
    invoiceData: [],
    invoiceModal: false,
    modalActive: null,
    invoicesLoaded: null
  },
  mutations: {
    TOGGLE_INVOICE(state) {
      alert(state.invoiceModal)
      state.invoiceModal = !state.invoiceModal
    },
    TOGGLE_MODAL(state) {
      state.modalActive = !state.modalActive
    },
    SET_INVOICE_DATA(state, payload) {
      state.invoiceData.push(payload)
    },
    INVOICES_LOADED(state) {
      state.invoicesLoaded = true
    }
  },
  actions: {
    async GET_INVOICES({commit, state}) {
      debugger
      const getData = db.collection('invoices')
      const results = await getData.get()
      console.log(results)
      results.forEach(doc => {
        if(!state.invoiceData.some(invoice => invoice.docId === doc.id)) {
          const data = {
            invoiceId: doc.id,
            billerStreetAddress: doc.data().billerStreetAddress,
            billerCity: doc.data().billerCity,
            billerZipCode: doc.data().billerZipCode,
            billerCountry: doc.data().billerCountry,
            clientName: doc.data().clientName,
            clientEmail: doc.data().clientEmail,
            clientStreetAddress: doc.data().clientStreetAddress,
            clientCity: doc.data().clientCity,
            clientZipCode: doc.data().clientZipCode,
            clientCountry: doc.data().clientCountry,
            invoiceDateUnix: doc.data().invoiceDate,
            invoiceDate: doc.data().invoiceDate,
            paymentTerms: doc.data().paymentTerms,
            paymentDueDateUnix: doc.data().paymentDueDateUnix,
            paymentDueDate: doc.data().paymentDueDate,
            productDescription: doc.data().productDescription,
            invoicePending: doc.data().invoicePending,
            invoiceDraft: doc.data().invoiceDraft,
            invoiceItemList: doc.data().invoiceItemList,
            invoiceTotal: doc.data().invoiceTotal,
          }
          commit('SET_INVOICE_DATA', data)
        }
      })
      commit('INVOICES_LOADED')
    }
  },
  modules: {
  }
})

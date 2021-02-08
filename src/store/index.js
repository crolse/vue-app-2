import Vue from 'vue'
import Vuex from 'vuex'
/*import VuexPersistence from 'vuex-persist'
Vue.use(VuexPersistence)*/

Vue.use(Vuex)
/*const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})*/

export default new Vuex.Store({
  state: {
    events: [
      { type: "Repas", adresse: "7 avenue de la chico a Leo", codePostal: "44190", ville: "clisson", date: "2021-07-02" },
      { type: "Soirée", adresse: "12 impasse du crane chauve à Chibrax", codePostal: "44190", ville: "clisson", date: "2021-08-02" },
      { type: "Makumba", adresse: "52 boulevard du foie de pie à Tatieu", codePostal: "44190", ville: "clisson", date: "2021-09-02" },


    ]
  },
  getters: {},
  mutations: {
    addEvents (state, event) {
      // mutate state
      state.events.push(event)
    }
  },
  actions: {
  },
  modules: {
  },
  /*plugins: [vuexLocal.plugin]*/
})

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: [
      { type: "Apero", adresse: "9 rue de la mere à bastien", codePostal: "44190", ville: "clisson", date: "2021-06-02" },
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
  }
})

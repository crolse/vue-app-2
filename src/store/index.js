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
      {
        type: "Apero", nom: "Bastos", adresse: "8 avenu du dev", codePostal: "010101", ville: "VueCity", date: "2021-08-02", bieres: true, saucissons: true,
        gateaux_apero: true, vins: true, prefou: true, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus cursus enim id dolor consequat, ut semper tortor facilisis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut tincidunt felis eget vehicula accumsan. Donec et ullamcorper mi. Integer hendrerit sit amet dui nec commodo. Mauris tincidunt nulla enim, et auctor lacus finibus sit amet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin fermentum, mauris id placerat volutpat, turpis arcu"
      },



    ],

  },
  getters: {},
  mutations: {
    addEvents (state, event) {
      // mutate state
      state.events.push(event)
    },
    deleteEvents (state, index) {
      state.events.splice(index, 1)
    }
  },
  actions: {
  },
  modules: {
  },
  /*plugins: [vuexLocal.plugin]*/
})

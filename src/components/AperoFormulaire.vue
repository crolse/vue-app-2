
<template>
  <form>
    <v-row id="container">
      <v-col cols="12" md="6">
        <v-text-field v-model="name" label="Nom" required></v-text-field>
        <v-text-field v-model="adresse" label="Adresse" required></v-text-field>
        <v-text-field v-model="ville" label="Ville" required></v-text-field>
        <v-text-field v-model="code" label="CodePostal" required></v-text-field>
      </v-col>

      <v-date-picker v-model="picker"></v-date-picker>

    </v-row>
    <v-textarea v-model="description" solo label="Description" auto-grow></v-textarea>

    <v-row>
      <v-checkbox v-model="bieres" label="bieres"></v-checkbox>
      <v-checkbox v-model="saucissons" label="saucisson"></v-checkbox>
      <v-checkbox v-model="gateaux_apero" label="gateaux apéro"></v-checkbox>
      <v-checkbox v-model="vins" label="vins"></v-checkbox>
      <v-checkbox v-model="prefou" label="préfou"></v-checkbox>
    </v-row>
    <div id=container_button>
      <router-link to="Events">
        <v-btn class="mr-4" @click="addEvents">
          Creer
        </v-btn>
      </router-link>
      <router-link to="/">
        <v-btn>
          Annuler
        </v-btn>
      </router-link>

    </div>
  </form>
</template>


<script>
export default {
  name: 'AperoFormulaire',

  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
      name: '',
      adresse: '',
      ville: '',
      code: '',
      description : '',
      bieres : false ,
      saucissons : false ,
      gateaux_apero : false ,
      vins : false ,
      prefou : false

    }
  },
  methods: {
    addEvents: function () {
      console.log(this.picker)
      console.log(this.bieres)
      console.log(this.name)
      this.$store.commit('addEvents', {
        type: "Apero", uuid: this.$uuid.v4(), nom: this.name, adresse: this.adresse, codePostal: this.code, ville: this.ville, date: this.picker, bieres: this.bieres, saucissons: this.saucissons,
        gateaux_apero: this.gateaux_apero, vins: this.vins, prefou: this.prefou, description: this.description
      })
    }
  }

}
</script>





<style>
#container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
form {
  width: 60%;
}
#container_button {
  margin: 5%;
  display: flex;
  justify-content: center;
}
</style>




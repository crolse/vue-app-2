
<template>
  <form>
    <v-row id="container">
      <v-col cols="12" md="6">
        <v-text-field v-model="name" label="Nom" required>{{name}}</v-text-field>
        <v-text-field v-model="adresse" label="Adressse"></v-text-field>
        <v-text-field v-model="ville" label="Ville"></v-text-field>
        <v-text-field v-model="code_postal" label="CodePostal"></v-text-field>
      </v-col>

      <v-date-picker v-model="picker"></v-date-picker>

    </v-row>
    <v-textarea name="input-7-1" solo label="Description" auto-grow></v-textarea>

    <v-row>
      <v-checkbox v-model="bieres" label="bieres"></v-checkbox>
      <v-checkbox v-model="saucissons" label="saucisson"></v-checkbox>
      <v-checkbox v-model="gateaux_apero" label="gateaux apéro"></v-checkbox>
      <v-checkbox v-model="vins" label="vins"></v-checkbox>
      <v-checkbox v-model="préfou" label="préfou"></v-checkbox>
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
  name: 'MakumbaFormulaire',
  data: {
    name: ""
  },
  methods: {
    addEvents: function () {
      console.log(this.name)
      this.$store.commit('addEvents', { type: "Makumba", adresse: this.adresse, codePostal: this.codePostal, ville: this.ville, date: "2021-09-02" })
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
  align-items: center;
  justify-content: center;
}
</style>




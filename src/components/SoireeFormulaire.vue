
<template>
  <form>
    <v-row id="container">
      <v-col cols="12" md="6">
        <v-text-field v-model="name" label="Nom" required></v-text-field>
        <v-text-field v-model="adresse" label="Adresse"></v-text-field>
        <v-text-field v-model="ville" label="Ville"></v-text-field>
        <v-text-field v-model="code" label="CodePostal"></v-text-field>
      </v-col>

      <v-date-picker v-model="picker"></v-date-picker>

    </v-row>
    <v-textarea v-model="description" solo label="Description" auto-grow></v-textarea>

    <v-row>
      <v-checkbox v-model="dormir" label="Possibilité de dormir"></v-checkbox>
      <v-checkbox v-model="lumiere" label="Jeux de lumiere"></v-checkbox>
      <v-checkbox v-model="enceinte" label="Enceinte"></v-checkbox>
      <v-checkbox v-model="alcool" label="Alcool"></v-checkbox>
      <v-checkbox v-model="parking" label="Parking"></v-checkbox>
    </v-row>
    <div id=container_button>

      <router-link to="Events">
        <v-btn class="mr-4" @click="addEvents">
          Creer
        </v-btn>
      </router-link>
    <router-link to="/">
      <v-btn >
        Annuler
      </v-btn>
    </router-link>

    </div>
  </form>
</template>


<script>
export default {
  name: 'SoireeFormulaire',
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
    }
  },
  methods: {
    addEvents: function () {
      console.log(this.name)
      this.$store.commit('addEvents', {
        type: "Soirée", nom: this.name, adresse: this.adresse, codePostal: this.code,
        ville: this.ville, date: this.picker, description: this.description, dormir: this.dormir, lumiere: this.lumiere, enceinte: this.enceinte, alcool: this.alcool, parking: this.parking
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
}
</style>




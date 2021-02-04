
<template>
  <form>
    <v-row id="container">
      <v-col cols="12" md="6">
        <v-text-field v-model="name" :error-messages="nameErrors" :counter="10" label="Nom" required @input="$v.name.$touch()" @blur="$v.name.$touch()"></v-text-field>
        <v-text-field v-model="adresse" :error-messages="adresseErrors" label="Adresse" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
        <v-text-field v-model="ville" :error-messages="villeErrors" label="Ville" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
        <v-text-field v-model="code_postal" :error-messages="codePostalErrors" label="CodePostal" required @input="$v.email.$touch()" @blur="$v.email.$touch()"></v-text-field>
      </v-col>

      <v-date-picker v-model="picker"></v-date-picker>

    </v-row>
    <v-textarea name="input-7-1" solo label="Description" auto-grow></v-textarea>

    <v-row>
      <v-checkbox v-model="bieres" :error-messages="checkboxErrors" label="bieres" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
      <v-checkbox v-model="saucissons" :error-messages="checkboxErrors" label="saucisson" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
      <v-checkbox v-model="gateaux_apero" :error-messages="checkboxErrors" label="gateaux apéro" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
      <v-checkbox v-model="vins" :error-messages="checkboxErrors" label="vins" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
      <v-checkbox v-model="préfou" :error-messages="checkboxErrors" label="préfou" required @change="$v.checkbox.$touch()" @blur="$v.checkbox.$touch()"></v-checkbox>
    </v-row>
    <div id=container_button>
      <v-btn class="mr-4" @click="submit">
        Creer
      </v-btn>
      <v-btn @click="clear">
        Annuler
      </v-btn>
    </div>
  </form>
</template>


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
  margin-top: 10%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>




<script>
export default {
  name: 'AperoFormulaire',


}
</script>
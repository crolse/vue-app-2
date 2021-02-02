<template>
  <div class="home">
    <categorie-accueil msg="Apero" />
    <categorie-accueil msg="Repas" />
    <categorie-accueil msg="Soirée" />
    <categorie-accueil msg="Makumba" />
  </div>
</template>

<style scoped>
</style>


<script>
// @ is an alias to /src

import CategorieAccueil from '../components/CategorieAccueil.vue'

export default {
  name: 'Home',
  components: {
    CategorieAccueil
  }
}
</script>


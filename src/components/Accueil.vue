// ./components/HomeLink.vue
<script>

import CategorieAccueil from './CategorieAccueil.vue'


export default {
  name: 'Accueil',
  components: {
    CategorieAccueil

  }
}
</script>

<template>
  <div>
    <categorie-accueil titre="Apero" />
    <categorie-accueil titre="Repas" />
    <categorie-accueil titre="Soirée" />
    <categorie-accueil titre="Makumba" />
  </div>
</template>

<style>
</style>
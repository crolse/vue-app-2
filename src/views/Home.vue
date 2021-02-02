<template>
  <div class="home">
    <div id="container">
      <categorie-accueil class="categorie_accueil" msg="Apero" />
      <categorie-accueil class="categorie_accueil" msg="Repas" />
      <categorie-accueil class="categorie_accueil" msg="Soirée" />
      <categorie-accueil class="categorie_accueil" msg="Makumba" />
    </div>
  </div>
</template>

<style scoped>
.home {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#container {
  height: 70%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

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


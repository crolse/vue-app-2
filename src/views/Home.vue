<template>
  <div class="home">
    <div id="container">
      <router-link to="/AperoCreate">
        <categorie-accueil class="categorie_accueil" msg="Apero" />
      </router-link>
      <router-link to="/RepasCreate">
        <categorie-accueil class="categorie_accueil" msg="Repas" />
      </router-link>
      <router-link to="/SoireeCreate">
        <categorie-accueil class="categorie_accueil" msg="Soirée" />
      </router-link>
      <router-link to="/MakumbaCreate">
        <categorie-accueil class="categorie_accueil" msg="Makumba" />
      </router-link>
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


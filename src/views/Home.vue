<template>
  <div class="home">
    <div id="container">
      <router-link class="link" to="/AperoCreate">
        <categorie-accueil class="categorie_accueil" msg="Apero" />
      </router-link>
      <router-link class="link" to="/RepasCreate">
        <categorie-accueil class="categorie_accueil" msg="Repas" />
      </router-link>
      <router-link class="link" to="/SoireeCreate">
        <categorie-accueil class="categorie_accueil" msg="Soirée" />
      </router-link>
      <router-link class="link" to="/MakumbaCreate">
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
  align-items: center;
}
.link {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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


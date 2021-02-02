// ./components/HomeLink.vue

<template>
  <div class="categorie_accueil">
    <div class="text-center">
      <v-btn rounded color="primary" dark>
        {{msg}}
      </v-btn>
    </div>
  </div>
</template>


<style>
</style>




<script>
export default {
  name: 'CategorieAccueil',
  props: {
    msg: String
  }
}
</script>



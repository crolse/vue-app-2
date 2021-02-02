// ./components/HomeLink.vue

<template>
  <div class="categorie_accueil">
    <div class="text-center">
      <v-btn id="button" rounded color="primary" x-large>
        {{msg}}
      </v-btn>
    </div>
  </div>
</template>


<style>
#button {
  width: 80%;
}
</style>




<script>
export default {
  name: 'CategorieAccueil',
  props: {
    msg: String
  }
}
</script>



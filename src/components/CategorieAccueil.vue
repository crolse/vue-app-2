// ./components/HomeLink.vue

<template>
  

    <v-btn id="button" rounded color="primary" x-large>
      {{msg}}
    </v-btn>

  
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



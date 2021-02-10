<template>
  <div class="soiree_create">
    <h1>Soirée</h1>
    <div class="container_forms">
      <soiree-formulaire />
    </div>
  </div>
</template>

<style scoped>
.container_forms {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
h1 {
  text-align: center;
  margin: 10px;
}
</style>


<script>

import SoireeFormulaire from '../components/SoireeFormulaire.vue'

// @ is an alias to /src



export default {
  name: 'SoireeCreate',
  components: {

    SoireeFormulaire

  }
}
</script>


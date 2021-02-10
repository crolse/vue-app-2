<template>
  <div class="repas_create">
    <h1>Repas</h1>
    <div class="container_forms">
      <repas-formulaire />
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

import RepasFormulaire from '../components/RepasFormulaire.vue'

// @ is an alias to /src



export default {
  name: 'RepasCreate',
  components: {
    RepasFormulaire

  }
}
</script>


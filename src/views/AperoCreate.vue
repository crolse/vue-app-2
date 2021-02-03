<template>
  <div class="apero_create">
    <h1>Apero</h1>
    <div class="container_forms">
      <apero-formulaire />
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
import AperoFormulaire from '../components/AperoFormulaire.vue'

// @ is an alias to /src



export default {
  name: 'AperoCreate',
  components: {
    AperoFormulaire

  }
}
</script>


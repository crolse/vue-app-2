<template>
  <div class="makumba_create">
    <h1>Makumba</h1>
    <div class="container_forms">
      <makumba-formulaire />
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
import MakumbaFormulaire from '../components/MakumbaFormulaire.vue'



// @ is an alias to /src



export default {
  name: 'MakumbaCreate',
  components: {


    MakumbaFormulaire

  }
}
</script>


/<template>
  <v-card class="card" elevation="2" outlined shaped>
    <v-card-title>Apero</v-card-title>
    <v-card-subtitle>09/02</v-card-subtitle>
    <v-card-text>Adresse</v-card-text>
    <v-card-actions>
      <v-btn color="deep-purple lighten-2" text @click="reserve">
        Voir plus
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
.card {
  width: 50%;
  margin: 1%;
}
</style>


<script>
export default {
  name: 'EventCard',

}
</script>



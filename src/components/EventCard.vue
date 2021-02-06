/<template>
  <div id="event_card">
    <div id="container_all_event" v-for="event in $store.state.events" :key="event">
    <v-card class="card" elevation="2" outlined shaped>
      <v-card-title>{{event.type}}</v-card-title>
      <v-card-subtitle>{{event.date}}</v-card-subtitle>
      <v-card-text>{{ event.adresse }}, {{ event.codePostal }} {{ event.ville }} </v-card-text>
      <v-card-actions>
        <v-btn color="deep-purple lighten-2" text @click="reserve">
          Voir plus
        </v-btn>
      </v-card-actions>
    </v-card>
  </div>
  </div>
</template>

<style scoped>
.card {
  width: 50%;
  margin: 1%;
}
#event_card {
  width: 100%;
}
#container_all_event {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


<script>
export default {
  name: 'EventCard',

}
</script>



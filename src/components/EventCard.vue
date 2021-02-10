/<template>
  <div id="event_card">
    <div id="container_all_event" v-for="(event, index) in $store.state.events" :key="index">
      <v-card v-if="event.type == 'Apero' " class="card" elevation="2" outlined shaped>
        <v-card-title >{{event.type}}</v-card-title>
        <v-card-subtitle>{{event.nom}} / {{event.date}}</v-card-subtitle>

        <v-card-text>Adresse : {{ event.adresse }}, {{ event.codePostal }} {{ event.ville }} </v-card-text>
        <v-card-text>Details :
          <ul v-if="event.bieres == true">Bieres</ul>
          <ul v-if="event.saucissons == true">Saucissons</ul>
          <ul v-if="event.gateaux_apero == true">Gateaux Apero</ul>
          <ul v-if="event.vins == true">Vins</ul>
          <ul v-if="event.prefou == true">Prefou</ul>
        </v-card-text>
        <v-card-text>Description :
          <ul>
            {{event.description}}
          </ul>
        </v-card-text>

        <v-card-actions id="button_delete">
          <v-btn @click="deleteEvents(index)" color="primary" text>
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-if="event.type == 'Repas' " class="card" elevation="2" outlined shaped>
        <v-card-title>{{event.type}}</v-card-title>
        <v-card-subtitle>{{event.nom}} / {{event.date}}</v-card-subtitle>

        <v-card-text>Adresse : {{ event.adresse }}, {{ event.codePostal }} {{ event.ville }} </v-card-text>
        <v-card-text>Details :
          <ul v-if="event.raclette == true">Raclette</ul>
          <ul v-if="event.grillade == true">Grillade</ul>
          <ul v-if="event.cote == true">Côte de Boeuf</ul>
          <ul v-if="event.autre == true">Autres</ul>
        </v-card-text>
        <v-card-text>Description :
          <ul>
            {{event.description}}
          </ul>
        </v-card-text>

        <v-card-actions id="button_delete">
          <v-btn @click="deleteEvents(index)" color="primary" text>
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-card>

      <v-card v-if="event.type == 'Soirée' " class="card" elevation="2" outlined shaped>
        <v-card-title>{{event.type}}</v-card-title>
        <v-card-subtitle>{{event.nom}} / {{event.date}}</v-card-subtitle>

        <v-card-text>Adresse : {{ event.adresse }}, {{ event.codePostal }} {{ event.ville }} </v-card-text>
        <v-card-text>Details :
          <ul v-if="event.dormir == true">Possibilité de dormir sur place</ul>
          <ul v-if="event.lumiere == true">Jeux de lumieres</ul>
          <ul v-if="event.enceinte == true">Enceinte</ul>
          <ul v-if="event.alcool == true">Alcool</ul>
          <ul v-if="event.parking == true">Possibilité de se garer</ul>
        </v-card-text>
        <v-card-text>Description :
          <ul>
            {{event.description}}
          </ul>
        </v-card-text>

        <v-card-actions id="button_delete">
          <v-btn @click="deleteEvents(index)" color="primary" text>
            Supprimer
          </v-btn>
        </v-card-actions>
      </v-card>

    </div>
  </div>
</template>

<script>
export default {
  name: 'EventCard',
  data () {
    return {
      picker: new Date().toISOString().substr(0, 10),
      }
  },
  methods: {
    deleteEvents: function (index) {
      console.log(index)
      this.$store.commit('deleteEvents', index)
    }
  }


}
</script>


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
#button_delete {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>






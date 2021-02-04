<template>
  <div id="events">
    <event-card></event-card>
    <event-card></event-card>
    <event-card></event-card>
    <event-card></event-card>

  </div>
</template>

<style scoped>
#events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>


<script>
import EventCard from '../components/EventCard.vue'
export default {
  components: { EventCard },
  name: 'Event',

}
</script>



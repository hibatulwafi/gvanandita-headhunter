<template>
  <div class="min-h-screen flex flex-col">
    <Hero />
    <Services />
    <FindCareers />
    <OurClients />
  </div>
</template>

<script setup>

import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue'
import FindCareers from '../components/FindCareers.vue'
import OurClients from '../components/OurClients.vue'
import { reactive, computed } from 'vue';

</script>

<style scoped>
.map-container {
  position: relative;
  width: 100%;
  height: auto;
}

.map-image {
  width: 100%;
  height: auto;
  display: block;
}

.city-marker {
  position: absolute;
  width: 1.5rem;
  height: 1.5rem;
  background-color: #fde047;
  border-radius: 50%;
  border: 2px solid #a3a3a3;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 10px 5px rgba(253, 224, 71, 0.7);
}
</style>
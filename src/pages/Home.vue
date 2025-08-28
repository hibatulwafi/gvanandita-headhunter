<template>
  <div class="min-h-screen flex flex-col">
    <Hero />
    <Services />


    <section class="flex-grow">

      <div class="relative bg-cover bg-center h-[380px] flex items-center justify-center"
        style="background-image: url('/images/hero/hero-bg-jobs.jpg')">
        <div class="bg-gradient-to-r from-slate-900 to-slate-800 bg-opacity-80 text-center px-6 py-8 mx-6 rounded-xl">
          <h1 class="text-2xl md:text-3xl font-bold text-white">
            Temukan Peluang Karir, Daftar Sekarang!
          </h1>
          <div class="mt-4 flex flex-col md:flex-row gap-3 justify-center">
            <input v-model="searchPosition" type="text" placeholder="Job Position"
              class="px-4 py-2 rounded-md w-full md:w-60 focus:outline-none" />
            <input v-model="searchLocation" type="text" placeholder="Location"
              class="px-4 py-2 rounded-md w-full md:w-60 focus:outline-none" />
            <button
              class="px-6 py-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow">
              Cari Peluang
            </button>
          </div>
        </div>
      </div>
    </section>
    <OurClients />
  </div>
</template>

<script setup>

import Hero from '../components/Hero.vue'
import Services from '../components/Services.vue'
import FeaturedJobs from '../components/FeaturedJobs.vue'
import OurClients from '../components/OurClients.vue'

import { reactive, computed } from 'vue';

// URL gambar peta
const mapImage = '/images/map-2.png';

// Data kota dan posisi marker
const kotaList = reactive([
  // { nama: 'Jakarta', top: '38%', left: '17%' },
  // { nama: 'Tangerang', top: '39%', left: '18%' },
  // { nama: 'Semarang', top: '42%', left: '46%' },
  // { nama: 'Depok', top: '40%', left: '17.5%' },
  // { nama: 'Bandung', top: '44%', left: '20%' },
  // { nama: 'Surabaya', top: '50%', left: '55%' },
  // { nama: 'Bogor', top: '41%', left: '17.8%' },
  // { nama: 'Medan', top: '15%', left: '16%' },
  // { nama: 'Yogyakarta', top: '50%', left: '28%' },
  // { nama: 'Bekasi', top: '39%', left: '18.5%' },
  // { nama: 'Malang', top: '55%', left: '57%' },
  // { nama: 'Makassar', top: '60%', left: '78%' },
]);

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
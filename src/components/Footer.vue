<template>
  <footer class="bg-gray-800 text-white py-8 mt-12 rounded-t-3xl">
    <div class="container mx-auto px-6 flex flex-col md:flex-row gap-8 md:gap-12">
      <!-- Logo & Description -->
      <div class="md:w-1/2 flex flex-col items-start">
        <div class="flex items-center mb-4">
          <img src="../../public/images/logo.png" alt="Logo" class="w-32 mr-4" />
          <p class="text-gray-400 text-base leading-relaxed">
            GVA Head Hunter adalah perusahaan headhunter yang berkomitmen menghadirkan talenta terbaik sesuai kebutuhan
            klien.
          </p>
        </div>
      </div>
      <!-- Contact Info -->
      <div class="md:w-1/2 flex flex-col justify-center mx-4">
        <div class="mb-4">
          <h3 class="text-xl font-semibold mb-3 flex items-center gap-2">
            Hubungi Kami
          </h3>
          <p class="flex items-center gap-2 mb-2">
            <font-awesome-icon icon="envelope" class="text-orange-400" />
            <span>Email: info@gvanandita.com</span>
          </p>
          <p class="flex items-center gap-2 mb-2">
            <font-awesome-icon icon="phone" class="text-orange-400" />
            <span>Telepon: +62 823 1100 1068</span>
          </p>
          <p class="flex items-center gap-2">
            <font-awesome-icon icon="map-marker" class="text-orange-400" />
            <span>
              Jl. Wolter Monginsidi No. 107A, RT 006, RW 006, Rawat Barat, Kebayoran Baru, Jakarta Selatan, DKI Jakarta
              12170
            </span>
          </p>
        </div>
      </div>
    </div>
    <div class="border-t border-gray-700 pt-4 mt-8 text-center">
      <p class="text-sm text-gray-400">
        &copy; 2024 GVA Head Hunter. All Rights Reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
</script>
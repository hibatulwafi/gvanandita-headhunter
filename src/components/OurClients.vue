<template>
  <section id="sponsors" class="max-w-[85%] mx-auto pb-8 mt-8 sm:pb-8 overflow-hidden">
    <h2 class="text-3xl font-bold text-center mb-12">Our Client</h2>
    <div class="relative flex overflow-hidden">
      <div class="flex animate-marquee gap-12 items-center">
        <img v-for="(image, i) in images" :key="i" :src="image"
          class="h-[50px] md:h-[70px] object-contain min-w-[120px]" />
        <!-- duplikat supaya seamless -->
        <img v-for="(image, i) in images" :key="'dup-' + i" :src="image"
          class="h-[50px] md:h-[70px] object-contain min-w-[120px]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const images = [
  "/images/clients/1-bri.png",
  "/images/clients/2-mandiri.png",
  "/images/clients/3-bni.png",
  "/images/clients/4-bss.png",
  "/images/clients/5-capital.png",
  "/images/clients/6-dwi.png",
  "/images/clients/7-smbc.png",
];
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  display: flex;
  animation: marquee 20s linear infinite;
  width: max-content;
}
</style>

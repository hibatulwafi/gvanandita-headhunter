<template>
  <!-- Hero Section -->
  <section class="relative h-[320px] bg-cover bg-center flex items-center justify-center"
    style="background-image: url('/images/hero/hero-bg-full.jpg');">
    <div class="absolute inset-0 bg-black bg-opacity-50"></div>
    <div class="relative text-center text-white px-6">
      <h1 class="text-3xl md:text-4xl font-bold" data-aos="zoom-in-left">About Us</h1>
      <p class="mt-3 text-lg max-w-2xl mx-auto" data-aos="zoom-in-right" data-aos-delay="200">
        GVA Head Hunter – Solusi Rekrutmen yang Profesional & Tepat Sasaran
      </p>
    </div>
  </section>

  <!-- Bagaimana Kami Bekerja -->
  <section class="py-16 lg:px-16 bg-white">
    <div class="container mx-auto px-4 md:px-6 space-y-16">
      <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Bagaimana Kami Bekerja</h2>

      <!-- Row 1 -->
      <div class="flex flex-col md:flex-row items-center gap-8" data-aos="fade-left">
        <div class="flex-1">
          <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Profesional</span>
          <h2 class="text-base font-semibold mt-4">Komitmen pada Kualitas</h2>
          <p class="text-base text-gray-600 mt-2">
            GVA Head Hunter berkomitmen menghadirkan talenta terbaik yang sesuai dengan kebutuhan klien.
            Setiap kandidat kami pilih melalui proses yang ketat, sehingga Anda mendapatkan SDM yang benar-benar siap
            memberikan kontribusi nyata.
          </p>
        </div>
        <div class="flex-1 flex justify-center">
          <img src="/images/about/1-undraw_grades.svg" alt="Kualitas" class="w-72 object-cover"
            style="filter: drop-shadow(0px 0px 20px rgba(255, 165, 0, 0.3));" />
        </div>
      </div>

      <!-- Row 2 -->
      <div class="flex flex-col md:flex-row items-center gap-8 md:flex-row-reverse"data-aos="fade-right">
        <div class="flex-1">
          <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Tepat Sasaran</span>
          <h2 class="text-base font-semibold mt-4">Seleksi yang Efektif</h2>
          <p class="text-base text-gray-600 mt-2">
            Dengan jaringan yang luas serta metode seleksi yang terstruktur, kami membantu perusahaan menemukan
            kandidat berpengalaman yang selaras dengan budaya organisasi. Bukan hanya sekadar kompeten, tetapi juga
            cocok dengan visi perusahaan.
          </p>
        </div>
        <div class="flex-1 flex justify-center">
          <img src="/images/about/2-undraw_setup.svg" alt="Seleksi" class="w-72"
            style="filter: drop-shadow(0px 0px 20px rgba(255, 165, 0, 0.3));" />
        </div>
      </div>

      <!-- Row 3 -->
      <div class="flex flex-col md:flex-row items-center gap-8" data-aos="fade-left">
        <div class="flex-1">
          <span class="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">Solusi</span>
          <h2 class="text-base font-semibold mt-4">Mitra Rekrutmen Terpercaya</h2>
          <p class="text-base text-gray-600 mt-2">
            Kami hadir sebagai mitra strategis yang mendukung perusahaan dalam menyediakan solusi rekrutmen
            yang cepat, efisien, dan terpercaya. Bersama kami, rekrutmen bukan lagi tantangan, melainkan peluang
            untuk berkembang.
          </p>
        </div>
        <div class="flex-1 flex justify-center">
          <img src="/images/about/3-undraw_interview.svg" alt="Mitra Rekrutmen" class="w-72"
            style="filter: drop-shadow(0px 0px 20px rgba(255, 165, 0, 0.3));" />
        </div>
      </div>
    </div>
  </section>

  <!-- Proses Recruitment -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4 md:px-6">
      <h2 class="text-3xl font-bold text-center mb-12" data-aos="fade-up">Proses Recruitment</h2>

      <div class="grid gap-6 max-w-3xl mx-auto">
        <!-- Step 1 -->
        <div class="bg-white rounded-lg shadow p-6 border" data-aos="fade-up">
          <div class="flex justify-between items-start">
            <!-- Icon + Text -->
            <div class="flex items-start gap-4">
              <font-awesome-icon icon="search" class="text-orange-500 text-2xl" />
              <div>
                <h3 class="text-xl font-semibold">Specific Analysis</h3>
                <p class="text-gray-600">
                  Analisis mendalam untuk memahami kebutuhan spesifik perusahaan,
                  sehingga kandidat yang direkomendasikan benar-benar sesuai.
                </p>
              </div>
            </div>
            <!-- Number -->
            <span class="text-4xl font-bold text-gray-200">01</span>
          </div>
        </div>

        <!-- Step 2 -->
        <div class="bg-white rounded-lg shadow p-6 border" data-aos="fade-up" data-aos-delay="200">
          <div class="flex justify-between items-start">
            <!-- Icon + Text -->
            <div class="flex items-start gap-4">
              <font-awesome-icon icon="users" class="text-orange-500 text-2xl" />
              <div>
                <h3 class="text-xl font-semibold">Selection & Recruitment</h3>
                <p class="text-gray-600">
                  Proses seleksi ketat melalui assessment, wawancara, dan evaluasi
                  untuk menjaring kandidat terbaik sesuai standar perusahaan.
                </p>
              </div>
            </div>
            <!-- Number -->
            <span class="text-4xl font-bold text-gray-200">02</span>
          </div>
        </div>

        <!-- Step 3 -->
        <div class="bg-white rounded-lg shadow p-6 border" data-aos="fade-up" data-aos-delay="400">
          <div class="flex justify-between items-start">
            <!-- Icon + Text -->
            <div class="flex items-start gap-4">
              <font-awesome-icon icon="briefcase" class="text-orange-500 text-2xl" />
              <div>
                <h3 class="text-xl font-semibold">Hiring Process & Onboarding</h3>
                <p class="text-gray-600">
                  Kami mendampingi perusahaan hingga proses onboarding selesai,
                  memastikan transisi berjalan mulus bagi kandidat maupun perusahaan.
                </p>
              </div>
            </div>
            <!-- Number -->
            <span class="text-4xl font-bold text-gray-200">03</span>
          </div>
        </div>
      </div>
    </div>
  </section>


  <section class="py-16 bg-white">
    <div class="container mx-auto px-4 md:px-6">
      <OurClients />
    </div>
  </section>
</template>

<script setup>
import OurClients from '../components/OurClients.vue'
</script>

<template>
    <section class="pt-12 relative w-full min-h-screen text-white flex items-center overflow-hidden hero-background">
        <div class="absolute inset-0 bg-black opacity-60 z-10"></div>
        <div
            class="container mx-auto px-8 py-16 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
            <!-- Image Slider -->
            <div class="order-first lg:order-last flex justify-center items-center lg:justify-end mt-0 lg:mt-0">
                <div
                    class="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-56 sm:h-64 md:h-80 lg:h-[400px] rounded-lg shadow-2xl overflow-hidden float-animation relative">
                    <Transition name="fade-slide" mode="out-in">
                        <img :src="slides[activeSlide].image" :alt="slides[activeSlide].alt"
                            :key="slides[activeSlide].image"
                            class="w-full h-full object-cover transition-all duration-700" />
                    </Transition>
                    <!-- Slider Controls -->
                    <button @click="prevSlide"
                        class="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 rounded-full p-2 text-white hover:bg-opacity-70 transition"
                        aria-label="Previous">
                        <font-awesome-icon icon="chevron-left" />
                    </button>
                    <button @click="nextSlide"
                        class="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-40 rounded-full p-2 text-white hover:bg-opacity-70 transition"
                        aria-label="Next">
                        <font-awesome-icon icon="chevron-right" />
                    </button>
                    <!-- Dots -->
                    <div class="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
                        <span v-for="(slide, idx) in slides" :key="idx" @click="activeSlide = idx"
                            class="w-3 h-3 rounded-full cursor-pointer"
                            :class="activeSlide === idx ? 'bg-gold-500' : 'bg-white bg-opacity-40'"></span>
                    </div>
                </div>
            </div>
            <!-- Text Content -->
            <div
                class="order-last lg:order-first flex flex-col justify-center space-y-6 text-center lg:text-left mt-12 lg:mt-0">
                <Transition name="fade-slide" mode="out-in">
                    <div :key="activeSlide">
                        <h1
                            class="text-4xl sm:text-5xl lg:text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
                            <span class="text-gold-500">{{ slides[activeSlide].title1 }}</span> {{
                                slides[activeSlide].title1white }} <br />
                            <span class="text-gold-500">{{ slides[activeSlide].title2 }}</span> {{
                                slides[activeSlide].title2white }}
                        </h1>
                        <p class="text-lg sm:text-xl text-gray-300 max-w-2xl lg:my-3">
                            {{ slides[activeSlide].description }}
                        </p>
                        <div
                            class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
                            <a @click.prevent="scroll"
                                class="inline-block border border-white hover:border-gold-500 text-white hover:text-gold-500 font-semibold py-3 px-8 rounded-full transition-colors duration-300 text-lg cursor-pointer">
                                Informasi Selengkapnya
                            </a>
                        </div>
                    </div>
                </Transition>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const slides = [
    {
        image: '/images/hero/slider-1.jpg',
        alt: 'GVA Head Hunter',
        title1: 'Temukan',
        title1white: 'Talent Terbaik',
        title2: 'Untuk',
        title2white: 'Bisnis Anda',
        description: 'GVA Head Hunter adalah perusahaan yang berkomitmen menghadirkan Talent Terbaik.'
    },
    {
        image: '/images/hero/slider-2.jpg',
        alt: 'GVA Head Hunter',
        title1: 'Kembangkan',
        title1white: 'Bisnis Anda',
        title2: 'Dengan',
        title2white: 'Keahlian Kami',
        description: 'Dengan jaringan yang luas dan proses rekrutmen yang sangat selektif, kami membantu perusahaan menemukan kandidat yang kompeten.'
    },
    {
        image: '/images/hero/slider-3.jpg',
        alt: 'GVA Head Hunter',
        title1: 'Dapatkan',
        title1white: 'Yang Terbaik',
        title2: 'Untuk',
        title2white: 'Perusahaan Anda',
        description: 'Kami mempresentasikan diri sebagai partner strategis dalam memberikan solusi rekrutmen yang cepat, profesional, dan terpercaya.'
    }
]

const activeSlide = ref(0)
let intervalId = null

const nextSlide = () => {
    activeSlide.value = (activeSlide.value + 1) % slides.length
}
const prevSlide = () => {
    activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
}

onMounted(() => {
    intervalId = setInterval(nextSlide, 5000)
})
onUnmounted(() => {
    clearInterval(intervalId)
})

const router = useRouter()
const route = useRoute()

const scroll = async () => {
  if (route.path !== '/') {
    await router.push('/#services')
  }
  setTimeout(() => {
    const element = document.getElementById('services')
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      })
    }
  }, 100)
}

</script>

<style scoped>
.text-gold-500 {
    color: #D1B000;
}

.bg-gold-500 {
    background-color: #D1B000;
}

.hover\:bg-gold-600:hover {
    background-color: #BF9C00;
}

.hover\:border-gold-500:hover {
    border-color: #D1B000;
}

.hover\:text-gold-500:hover {
    color: #D1B000;
}

.float-animation {
    animation: float 3s ease-in-out infinite;
}

@keyframes float {
    0% {
        transform: translateY(0px);
    }

    50% {
        transform: translateY(-15px);
    }

    100% {
        transform: translateY(0px);
    }
}

.hero-background {
    background-image: url('/public/images/hero/hero-bg-full.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: transparent;
}

/* Animasi Fade Slide */
.fade-slide-enter-active,
.fade-slide-leave-active {
    transition: opacity 0.6s, transform 0.6s;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
    opacity: 0;
    transform: translateY(30px) scale(0.98);
}

.fade-slide-enter-to,
.fade-slide-leave-from {
    opacity: 1;
    transform: translateY(0) scale(1);
}
</style>
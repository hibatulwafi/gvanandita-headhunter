<template>
    <section class="flex-grow">
        <div class="relative bg-cover bg-center h-[380px] flex items-center justify-center"
            style="background-image: url('/images/hero/hero-bg-jobs.jpg')" data-aos="fade-up">
            <div class="bg-gradient-to-r from-slate-900 to-slate-800 bg-opacity-80 text-center px-6 py-8 mx-6 rounded-xl">
                <h1 class="text-2xl md:text-3xl font-bold text-white">
                    Temukan Peluang Karir, Daftar Sekarang!
                </h1>
                <div class="mt-4 flex flex-col md:flex-row gap-3 justify-center">
                    <input v-model="searchPosition" type="text" placeholder="Job Position"
                        class="px-4 py-2 rounded-md w-full md:w-60 focus:outline-none" />
                    <input v-model="searchLocation" type="text" placeholder="Location"
                        class="px-4 py-2 rounded-md w-full md:w-60 focus:outline-none" />
                    <button @click="searchJobs"
                        class="px-6 py-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow">
                        Cari Peluang
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const searchPosition = ref("");
const searchLocation = ref("");

const router = useRouter();

const searchJobs = () => {
    router.push({
        name: "job-board",
        query: {
            position: searchPosition.value,
            location: searchLocation.value
        }
    });
};
</script>

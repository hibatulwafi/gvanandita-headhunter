<template>
  <!-- Hero Section -->
  <div class="relative bg-cover bg-center h-[280px] flex items-center justify-center"
    style="background-image: url('/images/hero/find-career.jpeg')" data-aos="fade-up">
    <div class="bg-slate-900 bg-opacity-80 text-center px-6 py-8 mx-6 rounded-xl max-w-3xl w-full">
      <h1 class="text-2xl md:text-3xl font-bold text-white">
        Lowongan Kerja di Indonesia
      </h1>
      <div class="mt-4 flex flex-col md:flex-row gap-3 justify-center">
        <input v-model="jobStore.searchPosition" type="text" placeholder="Cari Pekerjaan / Skill"
          class="px-4 py-2 rounded-md w-full md:w-60 focus:outline-none border" />
        <input v-model="jobStore.searchLocation" type="text" placeholder="Lokasi"
          class="px-4 py-2 rounded-md w-full md:w-60 focus:outline-none border" />
        <button @click="refreshJobs"
          class="px-6 py-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow hover:opacity-90 transition">
          Cari
        </button>
      </div>
    </div>
  </div>

  <!-- Filter + Job List -->
  <section class="py-10 bg-gray-50">
    <div class="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <!-- Filter -->
      <aside class="bg-white rounded-lg shadow p-4 space-y-4 md:col-span-1
               md:sticky md:top-24 md:self-start md:max-h-[80vh] md:overflow-y-auto min-h-[200px]">
        <template v-for="section in sections" :key="section.key">
          <div>
            <button @click="section.open = !section.open"
              class="flex justify-between w-full text-left font-semibold text-gray-800 mt-2 border-b border-gray-300 pb-2">
              <span>{{ section.label }}</span>
              <span>{{ section.open ? '−' : '+' }}</span>
            </button>

            <!-- Transition untuk expand -->
            <transition enter-active-class="transition-all duration-300 ease-out"
              leave-active-class="transition-all duration-200 ease-in" enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-screen opacity-100" leave-from-class="max-h-screen opacity-100"
              leave-to-class="max-h-0 opacity-0">
              <div v-if="section.open" class="mt-2 flex flex-col space-y-1 text-sm text-gray-600 overflow-hidden">
                <!-- Loading State -->
                <p v-if="isFilterEmpty(section.key)" class="text-gray-500 italic text-sm">
                  Memuat filter...
                </p>

                <template v-else-if="section.key === 'job_types'">
                  <label v-for="type in jobStore.filters.job_types" :key="type">
                    <input type="checkbox" :value="type" v-model="jobStore.selectedJobTypes" />
                    {{ type }}
                  </label>
                </template>

                <template v-else-if="section.key === 'locations'">
                  <label v-for="loc in jobStore.filters.job_location_types" :key="loc">
                    <input type="checkbox" :value="loc" v-model="jobStore.selectedLocations" />
                    {{ loc }}
                  </label>
                </template>

                <template v-else-if="section.key === 'categories'">
                  <label v-for="cat in jobStore.filters.categories" :key="cat.id">
                    <input type="checkbox" :value="cat.id" v-model="jobStore.selectedCategories" />
                    {{ cat.name }}
                  </label>
                </template>

                <template v-else-if="section.key === 'levels'">
                  <label v-for="lvl in jobStore.filters.experience_levels" :key="lvl">
                    <input type="checkbox" :value="lvl" v-model="jobStore.selectedLevels" />
                    {{ lvl }}
                  </label>
                </template>
              </div>
            </transition>
          </div>
        </template>
      </aside>

      <!-- Job List -->
      <div class="md:col-span-3">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Job Card -->
          <div v-for="job in jobStore.jobs" :key="job.id"
            class="bg-white rounded-lg shadow p-4 border hover:border-blue-500 transition">
            <!-- Header: Job title + Salary -->
            <div class="flex justify-between items-start">
              <!-- Job Title -->
              <h3 class="text-lg font-semibold text-gray-800 max-w-[70%] truncate" :title="job.job_title">
                {{ job.job_title }}
              </h3>

              <!-- Salary -->
              <p v-if="job.is_show_salary"
                class="text-green-700 font-semibold text-right text-sm md:text-lg ml-2 shrink-0">
                {{ formatCompactCurrency(job.min_salary, job.salary_currency) }} -
                {{ formatCompactCurrency(job.max_salary, job.salary_currency) }}
              </p>
              <p v-else class="text-gray-600 text-right text-sm md:text-base ml-2 shrink-0">
                Gaji Tidak Ditampilkan
              </p>
            </div>

            <!-- Tags -->
            <div class="flex flex-wrap gap-2 mt-2">
              <span class="px-2 py-1 bg-orange-100 text-orange-700 text-xs rounded">
                {{ job.category?.name }}
              </span>
              <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded capitalize">
                {{ job.job_location_type }}
              </span>
              <span class="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded capitalize">
                {{ job.experience_level }}
              </span>
            </div>

            <!-- Company & Location -->
            <p class="text-sm text-gray-600 mt-2">
              <font-awesome-icon icon="building" class="mr-1" />
              {{ job.company?.company_name }}
              <span class="mx-2">|</span>
              <font-awesome-icon icon="map-marker-alt" class="mr-1" />
              {{ job.city }}, {{ job.country }}
            </p>

            <hr class="my-2" />
            <!-- Published At + Button -->
            <div class="mt-3 flex items-center justify-between">
              <!-- Published At -->
              <p class="text-sm text-gray-600">
                {{ formatRelative(job.published_at) }}
              </p>

              <!-- Details Button -->
              <router-link :to="`/jobs/${job.slug}`"
                class="bg-custom-brand-600 hover:bg-custom-brand-700 text-white font-semibold py-1 px-12 rounded-md text-sm inline-block">
                Details
              </router-link>
            </div>

          </div>

        </div>

        <!-- Loader -->
        <div v-if="jobStore.loading" class="text-center py-6 text-gray-600">
          Memuat lebih banyak pekerjaan...
        </div>

        <!-- Empty State -->
        <div v-else-if="!jobStore.hasMore" class="text-center py-6 text-gray-600">
          Tidak ada data lagi.
        </div>
        <!-- Infinite Scroll Trigger -->
        <div ref="loadMoreTrigger" class="h-6"></div>
      </div>

    </div>
  </section>
</template>

<script setup>
/* ===============================
   Imports
================================ */
import { ref, reactive, onMounted, onBeforeUnmount, watch } from "vue"
import { useRoute } from "vue-router"
import { useJobStore } from "@/stores/jobStore"
import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import "dayjs/locale/id" // bahasa Indonesia

/* ===============================
   Dayjs Setup
================================ */
dayjs.extend(relativeTime)
dayjs.locale("id")

/* ===============================
   Utils / Helpers
================================ */
function formatRelative(date) {
  return dayjs(date).fromNow()
}

function formatCompactCurrency(amount, currency) {
  if (!amount) return ""

  if (currency === "IDR") {
    if (amount >= 1_000_000) {
      const juta = amount / 1_000_000
      return juta % 1 === 0 ? `${juta}jt` : `${juta.toFixed(1)}jt`
    }
    return amount.toLocaleString("id-ID")
  }

  if (currency === "USD") {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(amount)
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount)
}

/* ===============================
   State & Stores
================================ */
const jobStore = useJobStore()
const route = useRoute()
const loadMoreTrigger = ref(null)
let observer = null

// Sections accordion
const sections = reactive([
  { key: "job_types", label: "Tipe Pekerjaan", open: true },
  { key: "locations", label: "Lokasi Kerja", open: false },
  { key: "categories", label: "Kategori", open: false },
  { key: "levels", label: "Level", open: false },
])

// Helper: cek filter kosong
const isFilterEmpty = (key) => {
  const f = jobStore.filters
  if (!f) return true
  return (
    (key === "job_types" && f.job_types.length === 0) ||
    (key === "locations" && f.job_location_types.length === 0) ||
    (key === "categories" && f.categories.length === 0) ||
    (key === "levels" && f.experience_levels.length === 0)
  )
}

/* ===============================
   Jobs Fetching
================================ */
const refreshJobs = () => jobStore.fetchJobs(1, false)

const setupObserver = () => {
  if (observer) observer.disconnect()

  observer = new IntersectionObserver(
    (entries) => {
      if (
        entries[0].isIntersecting &&
        jobStore.pagination.next_page_url &&
        !jobStore.loading
      ) {
        jobStore.fetchJobs(jobStore.pagination.current_page + 1, true)
      }
    },
    { threshold: 1.0 }
  )

  if (loadMoreTrigger.value) observer.observe(loadMoreTrigger.value)
}

/* ===============================
   Watchers
================================ */
// Pre-fill search dari query param
jobStore.searchPosition = route.query.position || ""
jobStore.searchLocation = route.query.location || ""

// Refresh jika query berubah
watch(
  () => [route.query.position, route.query.location],
  () => {
    refreshJobs()
  }
)

// Debounce filter (2 detik)
let filterTimeout = null
watch(
  () => [
    jobStore.selectedJobTypes,
    jobStore.selectedLocations,
    jobStore.selectedCategories,
    jobStore.selectedLevels,
  ],
  () => {
    if (filterTimeout) clearTimeout(filterTimeout)
    filterTimeout = setTimeout(() => {
      jobStore.fetchJobs(1, false)
    }, 2000)
  },
  { deep: true }
)

/* ===============================
   Lifecycle
================================ */
onMounted(() => {
  jobStore.fetchFilters().then(() => {
    refreshJobs()
    setupObserver()
  })
})

onBeforeUnmount(() => {
  if (observer) observer.disconnect()
})
</script>

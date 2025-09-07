<template>
  <div class="min-h-screen p-6 bg-gray-100 flex justify-center">
    <div class="w-full max-w-4xl">
      <h1 class="text-3xl font-bold text-gray-800 mb-6 text-center">Riwayat Lamaran</h1>

      <!-- Skeleton Loader with Shimmer -->
      <div v-if="loading && applications.length === 0" class="space-y-4">
        <div v-for="n in 5" :key="n" class="bg-white rounded-xl p-4 shadow overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer">
          </div>
          <div class="relative z-10 space-y-2">
            <div class="h-5 bg-gray-300 rounded w-1/3"></div>
            <div class="h-4 bg-gray-200 rounded w-2/3"></div>
            <div class="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>

      <!-- Application List -->
      <div v-else class="space-y-4">
        <div v-for="app in applications" :key="app.id"
          class="bg-white p-4 rounded-xl shadow relative hover:shadow-md transition" data-aos="fade-up">
          <div class="flex justify-between items-start">
            <div class="space-y-2">
              <div class="flex items-center gap-2">
                <font-awesome-icon icon="briefcase" class="text-orange-500" />
                <h2 class="text-lg font-semibold text-gray-800">
                  {{ app.job_listing?.job_title || '-' }}
                </h2>
              </div>

              <div class="flex items-center gap-2">
                <font-awesome-icon icon="user-tie" class="text-gray-400" />
                <p class="text-sm text-gray-500">
                  {{ app.job_listing?.company?.company_name || '-' }}
                </p>
              </div>

              <div class="flex items-center gap-2">
                <font-awesome-icon icon="map-marker-alt" class="text-gray-400" />
                <p class="text-sm text-gray-500">
                  {{ app.job_listing?.job_location_type || '-' }}, {{ app.job_listing?.city || '-' }}, {{
                    app.job_listing?.country || '-' }}
                </p>
              </div>
            </div>

            <span :class="{
              'bg-green-100 text-green-700': app.status === 'applied',
              'bg-yellow-100 text-yellow-700': app.status === 'reviewed',
              'bg-red-100 text-red-700': app.status === 'rejected'
            }" class="px-2 py-1 rounded text-sm font-semibold flex items-center gap-1">
              <font-awesome-icon icon="clipboard-check" class="text-sm" />
              {{ app.status }}
            </span>
          </div>

          <p class="text-xs text-gray-400 mt-2 flex items-center gap-1">
            <font-awesome-icon icon="hourglass-half" class="text-gray-400" />
            Applied at: {{ formatDate(app.applied_at) }}
          </p>
          <router-link v-if="app.job_listing" :to="`/jobs/${app.job_listing.slug}`"
            class="absolute bottom-4 right-4 bg-orange-500 text-white px-3 py-1 rounded hover:bg-orange-600 transition flex items-center gap-1">
            Detail
            <font-awesome-icon icon="chevron-right" class="text-xs" />
          </router-link>
        </div>

        <!-- Infinite Scroll Loader -->
        <div v-if="loading && applications.length > 0" class="text-center py-4 text-gray-500">
          Loading more...
        </div>

        <div v-if="!hasMore && applications.length > 0" class="text-center py-4 text-gray-400">
          Tidak ada data lagi.
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, computed } from "vue"
import { useJobStore } from "@/stores/jobStore"
import { useRouter } from "vue-router"

const router = useRouter()
const jobStore = useJobStore()

// Redirect ke login jika belum login
const token = localStorage.getItem("token")
if (!token) router.push({ name: "login" })

const applications = computed(() => jobStore.applications)
const loading = computed(() => jobStore.loadingApplications)
const pagination = computed(() => jobStore.paginationApplications || {})

// Format tanggal
const formatDate = (dateStr) => {
  if (!dateStr) return "-"
  const d = new Date(dateStr)
  return d.toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

// Infinite scroll
const hasMore = computed(() => pagination.value.current_page < pagination.value.last_page)

const loadMore = () => {
  if (!loading.value && hasMore.value) {
    jobStore.fetchApplyHistory(pagination.value.current_page + 1)
  }
}

// Scroll listener
const onScroll = () => {
  const scrollTop = window.scrollY
  const windowHeight = window.innerHeight
  const fullHeight = document.documentElement.scrollHeight

  if (scrollTop + windowHeight + 100 >= fullHeight) {
    loadMore()
  }
}

onMounted(() => {
  jobStore.fetchApplyHistory()
  window.addEventListener("scroll", onScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll)
})
</script>

<style scoped>
/* AOS fade animation */
[data-aos] {
  opacity: 0;
  transition-property: opacity, transform;
  transition-duration: 0.8s;
  transition-timing-function: ease-out;
}

[data-aos].aos-animate {
  opacity: 1;
}

/* Skeleton shimmer */
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }

  100% {
    transform: translateX(100%);
  }
}

.animate-shimmer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.4) 50%,
      rgba(255, 255, 255, 0) 100%);
  animation: shimmer 1.5s infinite;
}
</style>

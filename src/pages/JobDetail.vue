<template>
	<div class="container mx-auto px-6 py-12 font-sans">
		<div v-if="job" class="max-w-4xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">

			<!-- Job Header & Status -->
			<div
				class="px-8 py-6 flex flex-col md:flex-row justify-between items-start md:items-center border-b pb-6 mb-6">
				<div>
					<h1 class="text-3xl font-extrabold text-gray-900 mb-2">{{ job.job_title }}</h1>
					<p class="text-xl text-gray-600 font-medium">{{ job.company?.company_name }}</p>
					<p class="text-md text-gray-500 mt-1">{{ job.category?.name }}</p>
				</div>
				<span class="mt-4 md:mt-0 px-4 py-2 text-sm font-semibold rounded-full"
					:class="job.is_open ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'">
					{{ job.is_open ? 'Open' : 'Closed' }}
				</span>
			</div>

			<!-- Job Meta Details -->
			<div class="px-8 pb-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-gray-700 mb-8">
				<div class="flex items-center space-x-3">
					<font-awesome-icon :icon="['fas', 'map-marker-alt']" class="w-6 h-6 text-custom-brand-700" />
					<div>
						<p class="font-semibold text-gray-800">Location</p>
						<p class="text-sm">{{ job.city }}, {{ job.country }}</p>
					</div>
				</div>

				<div class="flex items-center space-x-3">
					<font-awesome-icon :icon="['fas', 'briefcase']" class="w-6 h-6 text-custom-brand-700" />
					<div>
						<p class="font-semibold text-gray-800">Job Type</p>
						<p class="text-sm">{{ job.job_type }}</p>
					</div>
				</div>

				<div class="flex items-center space-x-3">
					<font-awesome-icon :icon="['fas', 'award']" class="w-6 h-6 text-custom-brand-700" />
					<div>
						<p class="font-semibold text-gray-800">Experience</p>
						<p class="text-sm">{{ job.experience_level }}</p>
					</div>
				</div>

				<div class="flex items-center space-x-3">
					<font-awesome-icon :icon="['fas', 'handshake']" class="w-6 h-6 text-custom-brand-700" />
					<div>
						<p class="font-semibold text-gray-800">Salary</p>
						<p class="text-sm">
							<span v-if="job.min_salary && job.max_salary">
								{{ formatCurrency(job.min_salary, job.salary_currency) }} -
								{{ formatCurrency(job.max_salary, job.salary_currency) }}
							</span>
							<span v-else>Negotiable</span>
						</p>
					</div>
				</div>
			</div>

			<!-- Job Description Section -->
			<section class="px-8 pb-8">
				<h2 class="text-2xl font-bold text-gray-900 mb-4 border-b-2 pb-2">Job Description</h2>
				<p class="text-gray-700 leading-relaxed whitespace-pre-line px-4 py-2 bg-gray-50 rounded-lg">{{
					job.description
				}}</p>
			</section>

			<!-- Apply Button & Status -->
			<div class="px-8 pb-8 text-center">
				<button v-if="authStore.isAuthenticated" @click="applyJob"
					class="px-8 py-3 bg-custom-brand-600 hover:bg-custom-brand-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105"
					:disabled="isApplying || !job.is_open">
					<span v-if="isApplying">Applying...</span>
					<span v-else>Apply Now</span>
				</button>

				<button v-else @click="router.push({ name: 'login' })"
					class="px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-bold rounded-full shadow-lg transition-transform transform hover:scale-105">
					Login to Apply
				</button>

				<p v-if="successMessage" class="mt-4 text-green-600 font-medium">{{ successMessage }}</p>
				<p v-if="errorMessage" class="mt-4 text-red-600 font-medium">{{ errorMessage }}</p>
			</div>
		</div>

		<div v-else class="text-center text-gray-500 text-lg">Loading job details...</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"
import { useJobStore } from "@/stores/jobStore"
import { formatCurrency } from "@/utils/formatCurrency"
import Swal from "sweetalert2"

const route = useRoute()
const router = useRouter()
const authStore = useAuthStore()
const jobStore = useJobStore()

const job = ref(null)
const isApplying = ref(false)

onMounted(async () => {
	job.value = await jobStore.fetchJobById(route.params.id)
})

async function applyJob() {
	if (!authStore.isAuthenticated) {
		router.push({ name: "login" })
		return
	}

	try {
		isApplying.value = true

		await jobStore.applyToJob(job.value.id)

		Swal.fire({
			icon: "success",
			title: "Application Submitted",
			text: "Your application has been sent successfully!",
			confirmButtonColor: "#16a34a" // hijau Tailwind (green-600)
		})
	} catch (error) {
		Swal.fire({
			icon: "error",
			title: "Oops...",
			text: error.message || "Failed to apply job.",
			confirmButtonColor: "#dc2626" // merah Tailwind (red-600)
		})
	} finally {
		isApplying.value = false
	}
}
</script>

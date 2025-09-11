<template>
  <div class="min-h-screen bg-gray-100 p-6 flex justify-center">
    <div class="bg-white rounded-3xl shadow-2xl max-w-4xl w-full p-8">

      <!-- Header -->
      <div class="flex items-center gap-6 mb-8" data-aos="fade-down">
        <img :src="`https://api.dicebear.com/6.x/bottts/svg?seed=${authStore.user.uuid || Math.random()}`" alt="Avatar"
          class="h-24 w-24 rounded-full object-cover border-4 border-orange-500 transition-transform duration-500 hover:scale-105" />
        <div>
          <h1 class="text-3xl font-bold text-gray-800 flex items-center gap-2">
            {{ authStore.user.first_name }} {{ authStore.user.last_name }}
          </h1>
          <p class="text-gray-500">{{ authStore.user.email }}</p>
          <p class="text-gray-500">{{ authStore.user.phone_number }}</p>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        <!-- Professional Info -->
        <div
          class="bg-gray-50 p-6 rounded-xl shadow-sm relative transition-transform duration-500 hover:scale-[1.02] border-gray-200 border-2 hover:border-orange-500"
          data-aos="fade-up" data-aos-delay="100">
          <button @click="editSection('professional')"
            class="absolute top-4 right-4 text-xs bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 transition-transform duration-300 transform hover:scale-110">
            <font-awesome-icon icon="edit" /> Edit
          </button>
          <h2 class="text-lg font-semibold text-gray-700 mb-4">Professional Info</h2>
          <div class="grid grid-cols-[140px_1fr] gap-x-4 gap-y-2 text-sm">
            <span class="font-medium text-gray-600">Job Title:</span>
            <span class="text-gray-800">{{ authStore.user.current_job_title }}</span>

            <span class="font-medium text-gray-600">Company:</span>
            <span class="text-gray-800">{{ authStore.user.current_company }}</span>

            <span class="font-medium text-gray-600">Employment Status:</span>
            <span class="text-gray-800">{{ authStore.user.employment_status }}</span>

            <span class="font-medium text-gray-600">Experience:</span>
            <span class="text-gray-800">{{ authStore.user.work_experience_years }} years</span>

            <span class="font-medium text-gray-600">Willing to Relocate:</span>
            <span class="text-gray-800">{{ authStore.user.willing_to_relocate }}</span>

            <span class="font-medium text-gray-600">Skills:</span>
            <span class="text-gray-800">{{ authStore.user.skills }}</span>
          </div>
        </div>

        <!-- Salary & Portfolio -->
        <div
          class="bg-gray-50 p-6 rounded-xl shadow-sm relative transition-transform duration-500 hover:scale-[1.02] border-gray-200 border-2 hover:border-orange-500"
          data-aos="fade-up" data-aos-delay="200">
          <button @click="editSection('salary')"
            class="absolute top-4 right-4 text-xs bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 transition-transform duration-300 transform hover:scale-110">
            <font-awesome-icon icon="edit" /> Edit</button>
          <h2 class="text-lg font-semibold text-gray-700 mb-4">Salary & Portfolio</h2>
          <div class="grid grid-cols-[140px_1fr] gap-x-4 gap-y-2 text-sm">
            <span class="font-medium text-gray-600">Current Salary:</span>
            <span class="text-gray-800">{{ formatCurrency(authStore.user.current_salary) }}</span>

            <span class="font-medium text-gray-600">Expected Salary:</span>
            <span class="text-gray-800">{{ formatCurrency(authStore.user.expected_salary) }}</span>

            <span class="font-medium text-gray-600">Resume:</span>
            <span>
              <button @click="openResume(authStore.user.resume_path)"
                class="text-orange-500 hover:underline hover:scale-105 transition-transform duration-300 text-sm">
                Lihat Resume
              </button>
            </span>

            <span class="font-medium text-gray-600">Portfolio:</span>
            <span>
              <a :href="authStore.user.portfolio_url" target="_blank"
                class="text-orange-500 hover:underline hover:scale-105 transition-transform duration-300 text-sm">View</a>
            </span>

            <span class="font-medium text-gray-600">LinkedIn:</span>
            <span>
              <a :href="authStore.user.linkedin_url" target="_blank"
                class="text-orange-500 hover:underline hover:scale-105 transition-transform duration-300 text-sm">Profile</a>
            </span>
          </div>
        </div>

        <!-- Personal Info -->
        <div
          class="bg-gray-50 p-6 rounded-xl shadow-sm md:col-span-2 relative transition-transform duration-500 hover:scale-[1.02] border-gray-200 border-2 hover:border-orange-500"
          data-aos="fade-up" data-aos-delay="300">
          <button @click="editSection('personal')"
            class="absolute top-4 right-4 text-xs bg-orange-500 text-white px-2 py-1 rounded hover:bg-orange-600 transition-transform duration-300 transform hover:scale-110">
            <font-awesome-icon icon="edit" /> Edit</button>
          <h2 class="text-lg font-semibold text-gray-700 mb-4">Personal Info</h2>
          <div class="grid grid-cols-[140px_1fr] gap-x-4 gap-y-2 text-sm">
            <span class="font-medium text-gray-600">Address:</span>
            <span class="text-gray-800 whitespace-pre-line">{{ authStore.user.address }}</span>

            <span class="font-medium text-gray-600">Account Active:</span>
            <span :class="authStore.user.is_active ? 'text-green-600' : 'text-red-600'">{{
              authStore.user.is_active ? 'Yes' : 'No' }}</span>

            <span class="font-medium text-gray-600">Email Verified:</span>
            <span :class="authStore.user.email_verified_at ? 'text-green-600' : 'text-red-600'">{{
              authStore.user.email_verified_at ? 'Yes' : 'No' }}</span>

            <span class="font-medium text-gray-600">Profile Complete:</span>
            <span :class="authStore.user.is_profile_complete ? 'text-green-600' : 'text-red-600'">{{
              authStore.user.is_profile_complete ? 'Yes' : 'No' }}</span>

            <span class="font-medium text-gray-600">Member Since:</span>
            <span class="text-gray-800">{{ formatDate(authStore.user.created_at) }}</span>

            <span class="font-medium text-gray-600">Phone:</span>
            <span class="text-gray-800">{{ authStore.user.phone_number }}</span>
          </div>
        </div>

      </div>

      <!-- Edit Modal -->
      <div v-if="isEditing" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        data-aos="fade-in">
        <div
          class="bg-white rounded-2xl shadow-xl max-w-2xl w-full p-6 relative transition-transform duration-300 transform scale-95 animate-scale-in">
          <h2 class="text-2xl font-bold text-gray-800 mb-4">Edit {{ currentSectionName }}</h2>
          <form @submit.prevent="saveProfile" class="space-y-4">

            <template v-if="currentSection === 'professional'">
              <div>
                <label class="block text-gray-600 font-medium">Job Title</label>
                <input v-model="editUser.current_job_title" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label class="block text-gray-600 font-medium">Company</label>
                <input v-model="editUser.current_company" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label class="block text-gray-600 font-medium">Employment Status</label>
                <input v-model="editUser.employment_status" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label class="block text-gray-600 font-medium">Experience Years</label>
                <input v-model="editUser.work_experience_years" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label class="block text-gray-600 font-medium">Skills</label>
                <input v-model="editUser.skills" class="w-full px-3 py-2 border rounded-lg" />
              </div>
            </template>

            <template v-if="currentSection === 'salary'">
              <div>
                <label class="block text-gray-600 font-medium">Current Salary</label>
                <input v-model="editUser.current_salary" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label class="block text-gray-600 font-medium">Expected Salary</label>
                <input v-model="editUser.expected_salary" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label class="block text-gray-600 font-medium">Portfolio URL</label>
                <input v-model="editUser.portfolio_url" class="w-full px-3 py-2 border rounded-lg" />
              </div>
              <div>
                <label class="block text-gray-600 font-medium">LinkedIn URL</label>
                <input v-model="editUser.linkedin_url" class="w-full px-3 py-2 border rounded-lg" />
              </div>
            </template>

            <template v-if="currentSection === 'personal'">
              <div>
                <label class="block text-gray-600 font-medium">Address</label>
                <textarea v-model="editUser.address" class="w-full px-3 py-2 border rounded-lg"></textarea>
              </div>
              <div>
                <label class="block text-gray-600 font-medium">Phone</label>
                <input v-model="editUser.phone_number" class="w-full px-3 py-2 border rounded-lg" />
              </div>
            </template>

            <div class="flex justify-end gap-4 mt-4">
              <button type="button" @click="isEditing = false"
                class="px-6 py-2 bg-gray-300 rounded-xl hover:bg-gray-400 transition">Cancel</button>
              <button @click="saveProfile" :disabled="isSaving" class="px-4 py-2 bg-blue-600 text-white rounded-lg">
                <span v-if="isSaving">Menyimpan...</span>
                <span v-else>Simpan</span>
              </button>
            </div>
          </form>
        </div>
      </div>


      <!-- Resume Modal -->
      <div v-if="showResumeModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-2xl shadow-xl max-w-4xl w-full h-[80vh] p-4 relative">
          <button @click="showResumeModal = false"
            class="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full hover:bg-red-600">
            ✕
          </button>
          <iframe :src="resumeUrl" class="w-full h-full rounded-lg"></iframe>
        </div>
      </div>


    </div>
  </div>
</template>
<script setup>
import { reactive, ref, onMounted, computed } from "vue"
import { useRouter } from "vue-router"
import { useAuthStore } from "@/stores/auth"
import AOS from "aos"
import "aos/dist/aos.css"
import Swal from "sweetalert2"

const authStore = useAuthStore()
const router = useRouter()

const isEditing = ref(false)
const isSaving = ref(false) // indikator loading
const currentSection = ref('')
const currentSectionName = ref('')
const editUser = reactive({ ...authStore.user })

const avatarUrl = computed(() => {
  if (authStore.user?.avatar) return authStore.user.avatar
  const seed = authStore.user?.uuid || Math.random().toString(36).substring(2, 10)
  return `https://api.dicebear.com/6.x/initials/svg?seed=${seed}`
})

onMounted(() => {
  AOS.init({ duration: 800, once: true })
})

const editSection = (section) => {
  currentSection.value = section
  currentSectionName.value =
    section === "professional"
      ? "Professional Info"
      : section === "salary"
        ? "Salary & Portfolio"
        : "Personal Info"
  Object.assign(editUser, authStore.user)
  isEditing.value = true
}

const handleLogout = () => {
  authStore.logout()
  router.push({ name: "login" })
}

const saveProfile = async () => {
  isSaving.value = true
  try {
    await authStore.updateProfile(editUser)
    Swal.fire({ icon: "success", title: "Berhasil", text: "Profil berhasil diperbarui" })
  } catch (error) {
    let msg = "Terjadi kesalahan saat menyimpan."
    if (error.response?.data?.errors) {
      msg = Object.values(error.response.data.errors).flat().join("\n")
    } else if (error.response?.data?.message) {
      msg = error.response.data.message
    }
    Swal.fire({ icon: "error", title: "Gagal", text: msg })
  } finally {
    isSaving.value = false
    isEditing.value = false
  }

}

const formatCurrency = (value) => {
  if (!value) return "-"
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(value)
}

const formatDate = (date) => {
  if (!date) return "-"
  return new Date(date).toLocaleDateString("id-ID", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

const showResumeModal = ref(false)
const resumeUrl = ref(null)

const openResume = (path) => {
  resumeUrl.value = `https://dash.gvanandita.com/storage/${path}`
  showResumeModal.value = true
}
</script>


<style>
/* Animasi modal scale-in */
@keyframes scale-in {
  0% {
    transform: scale(0.95);
    opacity: 0;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate-scale-in {
  animation: scale-in 0.3s forwards;
}
</style>

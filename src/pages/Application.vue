<template>
    <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
        <div class="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-4xl p-8">
            <!-- Registration Form -->
            <div class="flex flex-col justify-center">
                <h2 class="text-3xl font-bold text-gray-800 mb-2 text-center">Create an Application</h2>
                <p class="text-gray-500 mb-6 text-center">Lengkapi data Anda untuk memulai karir impian</p>

                <!-- Step Indicator -->
                <div class="flex items-center justify-between md:justify-around mb-8 text-center">
                    <div class="flex-1 flex flex-col items-center">
                        <div :class="{ 'bg-slate-600 text-white': step === 1, 'bg-gray-300 text-gray-600': step !== 1 }"
                            class="w-8 h-8 rounded-full flex items-center justify-center font-bold">1</div>
                        <div :class="{ 'text-slate-600 font-bold': step === 1, 'text-gray-400': step !== 1 }"
                            class="text-sm md:text-lg mt-2 hidden md:block">
                            Data Pribadi
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div :class="{ 'bg-slate-600 text-white': step === 2, 'bg-gray-300 text-gray-600': step !== 2 }"
                            class="w-8 h-8 rounded-full flex items-center justify-center font-bold">2</div>
                        <div :class="{ 'text-slate-600 font-bold': step === 2, 'text-gray-400': step !== 2 }"
                            class="text-sm md:text-lg mt-2 hidden md:block">
                            Pengalaman Kerja
                        </div>
                    </div>
                    <div class="flex-1 flex flex-col items-center">
                        <div :class="{ 'bg-slate-600 text-white': step === 3, 'bg-gray-300 text-gray-600': step !== 3 }"
                            class="w-8 h-8 rounded-full flex items-center justify-center font-bold">3</div>
                        <div :class="{ 'text-slate-600 font-bold': step === 3, 'text-gray-400': step !== 3 }"
                            class="text-sm md:text-lg mt-2 hidden md:block">
                            Profil Karir
                        </div>
                    </div>
                </div>

                <form @submit.prevent="handleSubmit" class="space-y-6">
                    <!-- STEP 1: Personal Information -->
                    <div v-if="step === 1" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Depan</label>
                            <input v-model="formData.first_name" type="text" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Nama Belakang</label>
                            <input v-model="formData.last_name" type="text" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                            <input v-model="formData.email" type="email" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Nomor Telepon</label>
                            <input v-model="formData.phone_number" type="tel" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-1">Alamat</label>
                            <input v-model="formData.address" type="text" required
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-1">Kata Sandi</label>
                            <div class="relative">
                                <input v-model="formData.password" :type="showPassword ? 'text' : 'password'" required
                                    class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                    placeholder="••••••••" />
                                <button type="button" @click="showPassword = !showPassword"
                                    class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-slate-600 focus:outline-none">
                                    <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" />
                                </button>
                            </div>
                        </div>
                    </div>

                    <!-- STEP 2: Work Experience -->
                    <div v-if="step === 2" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Jabatan Saat Ini</label>
                            <input v-model="formData.current_job_title" type="text"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Perusahaan Saat Ini</label>
                            <input v-model="formData.current_company" type="text"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Status Karyawan</label>
                            <select v-model="formData.employment_status"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                                <option value="">Pilih...</option>
                                <option value="full-time">Full-time</option>
                                <option value="part-time">Part-time</option>
                                <option value="contract">Contract</option>
                                <option value="freelance">Freelance</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Pengalaman (Tahun)</label>
                            <input v-model.number="formData.work_experience_years" type="number" min="0"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-1">Keahlian (Skills)</label>
                            <input v-model="formData.skills" type="text"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                                placeholder="Contoh: Vue.js, Laravel, Tailwind CSS" />
                        </div>
                        <div class="md:col-span-2 flex items-center">
                            <input type="checkbox" v-model="formData.willing_to_relocate" id="relocate"
                                class="h-4 w-4 text-slate-600 rounded" />
                            <label for="relocate" class="ml-2 text-sm text-gray-600">Bersedia ditempatkan di luar
                                kota?</label>
                        </div>
                    </div>

                    <!-- STEP 3: Career Profile -->
                    <div v-if="step === 3" class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Gaji Saat Ini (IDR)</label>
                            <input v-model.number="formData.current_salary" type="number"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-gray-700 mb-1">Gaji yang Diharapkan
                                (IDR)</label>
                            <input v-model.number="formData.expected_salary" type="number"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-1">Unggah Resume/CV</label>
                            <input type="file" @change="handleFileUpload" class="w-full" />
                            <p v-if="formData.resume_path" class="text-xs text-gray-500 mt-1">File terpilih: {{
                                formData.resume_path }}</p>
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-1">URL Portofolio</label>
                            <input v-model="formData.portfolio_url" type="url"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                        <div class="md:col-span-2">
                            <label class="block text-sm font-medium text-gray-700 mb-1">URL LinkedIn</label>
                            <input v-model="formData.linkedin_url" type="url"
                                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
                        </div>
                    </div>

                    <!-- Navigation Buttons -->
                    <div class="flex justify-between">
                        <button type="button" @click="step--" v-if="step > 1"
                            class="bg-gray-400 text-white py-2 px-6 rounded-xl font-semibold hover:bg-gray-500 transition duration-200">
                            Kembali
                        </button>
                        <button type="button" @click="step++" v-if="step < 3"
                            class="bg-slate-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition duration-200">
                            Selanjutnya
                        </button>
                        <button type="submit" v-if="step === 3"
                            class="bg-slate-600 text-white py-2 px-6 rounded-xl font-semibold hover:bg-indigo-700 transition duration-200">
                            Daftar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive } from "vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

// Daftarkan ikon Font Awesome
library.add(faEye, faEyeSlash);

const step = ref(1);
const showPassword = ref(false);

const formData = reactive({
    first_name: '',
    last_name: '',
    email: '',
    phone_number: '',
    password: '',
    address: '',
    current_job_title: '',
    current_company: '',
    employment_status: '',
    willing_to_relocate: false,
    work_experience_years: null,
    skills: '',
    resume_path: '',
    portfolio_url: '',
    linkedin_url: '',
    current_salary: null,
    expected_salary: null,
});

const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
        formData.resume_path = file.name;
        // Di sini Anda akan menangani logika unggah file yang sebenarnya
        console.log("File terpilih:", file);
    }
};

const handleSubmit = () => {
    console.log("Data Registrasi:", formData);
    alert("Pendaftaran berhasil! Lihat di konsol untuk data yang dikirim.");
};
</script>

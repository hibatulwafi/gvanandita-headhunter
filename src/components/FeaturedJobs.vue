<template>
    <!-- Hero Section -->
    <div class="relative bg-cover bg-center h-[380px] flex items-center justify-center"
        style="background-image: url('/images/hero/hero-bg-jobs.jpg')">
        <div class="bg-gradient-to-r from-slate-900 to-slate-800 bg-opacity-80 text-center px-6 py-8 mx-6 rounded-xl">
            <h1 class="text-2xl md:text-3xl font-bold text-white">
                Find 513 Career Opportunities, Register Now!
            </h1>
            <div class="mt-4 flex flex-col md:flex-row gap-3 justify-center">
                <input v-model="searchPosition" type="text" placeholder="Job Position"
                    class="px-4 py-2 rounded-md w-full md:w-60 focus:outline-none" />
                <input v-model="searchLocation" type="text" placeholder="Location"
                    class="px-4 py-2 rounded-md w-full md:w-60 focus:outline-none" />
                <button
                    class="px-6 py-2 rounded-md bg-gradient-to-r from-orange-500 to-yellow-400 text-white font-semibold shadow">
                    Find Me Opportunities
                </button>
            </div>
        </div>
    </div>

    <!-- Filter + Job List -->
    <section class="py-12 bg-gray-50">
        <div class="container mx-auto px-6">
            <!-- Filter Buttons -->
            <div class="flex flex-wrap gap-3 mb-6 justify-center">
                <button v-for="country in countries" :key="country.name" @click="activeCountry = country.name"
                    class="px-4 py-2 rounded-md border transition flex items-center space-x-2" :class="activeCountry === country.name
                        ? 'bg-green-100 border-green-600 text-green-700 font-semibold'
                        : 'bg-white text-gray-600 hover:bg-gray-100'">
                    <span>{{ country.label }}</span>
                    <img v-if="country.flag" :src="country.flag" class="h-4 w-6 object-cover rounded-sm" />
                </button>
            </div>

            <!-- Job List Responsive -->
            <!-- Desktop (Table) -->
            <div class="hidden md:block overflow-x-auto bg-white rounded-lg shadow">
                <table class="w-full text-left border-collapse">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-4 py-3">Position</th>
                            <th class="px-4 py-3">Industry</th>
                            <th class="px-4 py-3">Level</th>
                            <th class="px-4 py-3">Work Base</th>
                            <th class="px-4 py-3">Education</th>
                            <th class="px-4 py-3">Salary</th>
                            <th class="px-4 py-3"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(job, index) in filteredJobs" :key="index" class="border-b hover:bg-gray-50">
                            <td class="px-4 py-3 font-medium text-gray-800">{{ job.position }}</td>
                            <td class="px-4 py-3 text-gray-600">{{ job.industry }}</td>
                            <td class="px-4 py-3 text-gray-600">{{ job.level }}</td>
                            <td class="px-4 py-3 text-gray-600">{{ job.workBase }}</td>
                            <td class="px-4 py-3 text-gray-600">{{ job.education }}</td>
                            <td class="px-4 py-3 font-semibold text-green-700">{{ job.salary }}</td>
                            <td class="px-4 py-3 text-blue-600 hover:underline text-sm">Details</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- Mobile (Card Layout) -->
            <div class="grid md:hidden gap-4">
                <div v-for="(job, index) in filteredJobs" :key="index" class="bg-white rounded-lg shadow p-4">
                    <h3 class="text-lg font-semibold text-gray-800">{{ job.position }}</h3>
                    <p class="text-sm text-gray-600">{{ job.industry }} • {{ job.level }}</p>
                    <p class="text-sm text-gray-600 mt-1">
                        📍 {{ job.workBase }}
                    </p>
                    <p class="text-sm text-gray-600">🎓 {{ job.education }}</p>
                    <p class="text-green-700 font-semibold mt-1">{{ job.salary }}</p>
                    <a href="#" class="text-blue-600 hover:underline text-sm mt-2 inline-block">Details</a>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed } from "vue"

const countries = [
    { name: "All", label: "All" },
    { name: "Indonesia", label: "Indonesia", flag: "https://flagcdn.com/id.svg" },
    { name: "Malaysia", label: "Malaysia", flag: "https://flagcdn.com/my.svg" },
    { name: "Thailand", label: "Thailand", flag: "https://flagcdn.com/th.svg" },
    { name: "Philippines", label: "Philippines", flag: "https://flagcdn.com/ph.svg" },
]

const activeCountry = ref("All")
const searchPosition = ref("")
const searchLocation = ref("")

const jobs = ref([
    {
        position: "ROW Engineer",
        industry: "Telecommunication",
        level: "Staff/Officer",
        workBase: "Lipa, Cebu",
        education: "Bachelor",
        salary: "Apply to know more",
        country: "Philippines",
    },
    {
        position: "Senior Executive, Corporate Secretary",
        industry: "Accounting / Audit / Tax Services",
        level: "Senior Executive",
        workBase: "Kuala Lumpur",
        education: "Bachelor",
        salary: "MYR 4.000 - 5.000",
        country: "Malaysia",
    },
    {
        position: "Business Development Manager (ID)",
        industry: "Architecture / Construction",
        level: "Manager - Department",
        workBase: "DKI Jakarta",
        education: "Bachelor/Master",
        salary: "IDR 15.000.000 - 28.000.000",
        country: "Indonesia",
    },
    {
        position: "Project Coordinator",
        industry: "Telecommunication",
        level: "Staff/Officer",
        workBase: "Bangkok",
        education: "Bachelor",
        salary: "THB 20.000 - 26.000",
        country: "Thailand",
    },
    {
        position: "Data Analyst",
        industry: "Banking / Financial Services",
        level: "Staff/Officer",
        workBase: "Singapore",
        education: "Bachelor",
        salary: "SGD 3.500 - 5.000",
        country: "Singapore",
    },
    {
        position: "Marketing Manager",
        industry: "FMCG / Consumer Goods",
        level: "Manager - Department",
        workBase: "Ho Chi Minh City",
        education: "Bachelor/Master",
        salary: "VND 30.000.000 - 45.000.000",
        country: "Vietnam",
    },
    {
        position: "Cloud Engineer",
        industry: "IT / Software",
        level: "Senior Executive",
        workBase: "Kuala Lumpur",
        education: "Bachelor",
        salary: "MYR 6.000 - 10.000",
        country: "Malaysia",
    },
    {
        position: "Sales Manager",
        industry: "FMCG / Consumer Goods",
        level: "Manager - Department",
        workBase: "Bangkok",
        education: "Bachelor/Master",
        salary: "THB 40.000 - 60.000",
        country: "Thailand",
    },
    {
        position: "HR Generalist",
        industry: "Banking / Financial Services",
        level: "Staff/Officer",
        workBase: "Singapore",
        education: "Bachelor",
        salary: "SGD 3.000 - 5.000",
        country: "Singapore",
    },
    {
        position: "Accountant",
        industry: "Accounting / Audit / Tax Services",
        level: "Staff/Officer",
        workBase: "Ho Chi Minh City",
        education: "Bachelor",
        salary: "VND 15.000.000 - 25.000.000",
        country: "Vietnam",
    },
])

const filteredJobs = computed(() => {
    let result = jobs.value
    if (activeCountry.value !== "All") {
        result = result.filter(job => job.country === activeCountry.value)
    }
    if (searchPosition.value) {
        result = result.filter(job =>
            job.position.toLowerCase().includes(searchPosition.value.toLowerCase())
        )
    }
    if (searchLocation.value) {
        result = result.filter(job =>
            job.workBase.toLowerCase().includes(searchLocation.value.toLowerCase())
        )
    }
    return result
})
</script>

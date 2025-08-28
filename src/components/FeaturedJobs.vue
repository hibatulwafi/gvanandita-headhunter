<template>
    <section class="py-16 bg-gray-50">
        <div class="container mx-auto px-6">
            <h2 class="text-3xl font-bold mb-8">Featured Job</h2>

            <!-- Filter Buttons -->
            <div class="flex flex-wrap gap-3 mb-6">
                <button v-for="country in countries" :key="country.name" @click="activeCountry = country.name"
                    class="px-4 py-2 rounded-md border transition flex items-center space-x-2"
                    :class="activeCountry === country.name ? 'bg-green-100 border-green-600 text-green-700 font-semibold' : 'bg-white text-gray-600 hover:bg-gray-100'">
                    <span>{{ country.label }}</span>
                    <img v-if="country.flag" :src="country.flag" class="h-4 w-6 object-cover rounded-sm" />
                </button>
            </div>

            <!-- Search Inputs -->
            <div class="flex flex-col md:flex-row gap-4 mb-6">
                <input v-model="searchPosition" type="text" placeholder="Search by position"
                    class="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none w-full md:w-1/2" />
                <input v-model="searchLocation" type="text" placeholder="Search by location"
                    class="px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none w-full md:w-1/2" />
            </div>

            <!-- Job Table -->
            <div class="overflow-x-auto bg-white rounded-lg shadow">
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
                            <td class="px-4 py-3 flex items-center space-x-1 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-500"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                                </svg>
                                <span>{{ job.workBase }}</span>
                            </td>
                            <td class="px-4 py-3 flex items-center space-x-1 text-gray-600">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-indigo-500"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 18l-10-5v2l10 5 10-5v-2l-10 5z" />
                                </svg>
                                <span>{{ job.education }}</span>
                            </td>
                            <td class="px-4 py-3 font-semibold text-green-700">{{ job.salary }}</td>
                            <td class="px-4 py-3">
                                <a href="#" class="text-blue-600 hover:underline text-sm flex items-center space-x-1">
                                    <span>Details</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 12H9m6 0l-3-3m3 3l-3 3" />
                                    </svg>
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
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
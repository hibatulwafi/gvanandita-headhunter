<template>
    <div class="min-h-screen bg-gray-50 py-12">
        <div class="container mx-auto px-6 flex flex-col md:flex-row gap-8">
            <!-- Main Job Info -->
            <div class="flex-1 bg-white p-8 rounded-lg shadow">
                <!-- Header -->
                <div class="mb-6">
                    <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ job.position }}</h1>
                    <div class="flex flex-wrap gap-4 text-sm text-gray-600">
                        <div class="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-500" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                            </svg>
                            <span>{{ job.workBase }}</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" fill="none"
                                viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M12 8c-1.657 0-3 .843-3 2s1.343 2 3 2 3-.843 3-2-1.343-2-3-2zm0 6c-2.485 0-4.5 1.57-4.5 3.5v.5h9v-.5c0-1.93-2.015-3.5-4.5-3.5z" />
                            </svg>
                            <span>{{ job.level }}</span>
                        </div>
                        <div class="flex items-center space-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-indigo-500" fill="currentColor"
                                viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zm0 18l-10-5v2l10 5 10-5v-2l-10 5z" />
                            </svg>
                            <span>{{ job.education }}</span>
                        </div>
                        <div class="flex items-center space-x-1 font-semibold text-green-700">
                            <span>{{ job.salary }}</span>
                        </div>
                    </div>
                </div>

                <!-- Job Description -->
                <div class="mb-6">
                    <h2 class="text-xl font-semibold mb-2">Job Description</h2>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        <li v-for="(desc, i) in job.description" :key="i">{{ desc }}</li>
                    </ul>
                </div>

                <!-- Requirements -->
                <div class="mb-6">
                    <h2 class="text-xl font-semibold mb-2">Requirements</h2>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        <li v-for="(req, i) in job.requirements" :key="i">{{ req }}</li>
                    </ul>
                </div>

                <!-- Benefits -->
                <div v-if="job.benefits && job.benefits.length" class="mb-6">
                    <h2 class="text-xl font-semibold mb-2">Benefits</h2>
                    <ul class="list-disc list-inside text-gray-700 space-y-1">
                        <li v-for="(ben, i) in job.benefits" :key="i">{{ ben }}</li>
                    </ul>
                </div>

                <!-- Apply Button -->
                <div class="mt-8">
                    <button
                        class="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                        Apply Now
                    </button>
                </div>
            </div>

            <!-- Sidebar Company Info -->
            <aside class="w-full md:w-1/3 bg-white p-6 rounded-lg shadow h-fit">
                <div class="flex flex-col items-center text-center">
                    <img :src="job.company.logo" alt="Company Logo" class="h-16 w-16 object-contain mb-4">
                    <h3 class="text-xl font-semibold">{{ job.company.name }}</h3>
                    <p class="text-gray-600">{{ job.company.industry }}</p>
                    <a :href="job.company.website" target="_blank" class="mt-2 text-blue-600 hover:underline text-sm">
                        {{ job.company.website }}
                    </a>
                </div>
            </aside>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"

// Contoh data, nanti bisa diambil dari API
const job = ref({
    position: "Business Development Manager (ID)",
    industry: "Architecture / Construction",
    level: "Manager - Department",
    workBase: "DKI Jakarta",
    education: "Bachelor/Master",
    salary: "IDR 15.000.000 - 28.000.000",
    description: [
        "Identify and develop new business opportunities",
        "Maintain relationships with key clients",
        "Prepare proposals and presentations for potential clients",
    ],
    requirements: [
        "Bachelor’s degree in Business, Marketing, or related field",
        "Minimum 5 years experience in business development",
        "Excellent communication and negotiation skills",
        "Fluent in English and Bahasa Indonesia",
    ],
    benefits: [
        "Health insurance",
        "Performance bonus",
        "Flexible working hours",
    ],
    company: {
        name: "PT Elabram Systems",
        industry: "Telecommunication",
        logo: "https://dummyimage.com/100x100/3b82f6/ffffff.png&text=E",
        website: "https://www.elabram.com",
    },
})
</script>

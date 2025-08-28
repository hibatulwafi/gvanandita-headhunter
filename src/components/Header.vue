<template>
    <header class="bg-gray-900 shadow-lg sticky top-0 z-50">
        <div class="container mx-auto px-6 py-4 flex items-center justify-between">
            <!-- Logo -->
            <router-link to="/" class="flex items-center gap-3">
                <img src="/images/logo-line.png" alt="Logo" class="h-10 w-auto" />
            </router-link>

            <!-- Navigation -->
            <nav class="hidden md:flex items-center gap-8">
                <router-link to="/" class="hover:text-orange-500 transition font-medium"
                    :class="$route.path === '/' ? 'font-bold text-white bg-custom-brand-700 px-3 py-1 rounded' : 'text-custom-brand-500-500'">
                    Home
                </router-link>
                <router-link to="/about" class="hover:text-orange-500 transition font-medium"
                    :class="$route.path === '/about' ? 'font-bold text-white bg-custom-brand-700 px-3 py-1 rounded' : 'text-custom-brand-500'">
                    About
                </router-link>
                <router-link to="/jobs" class="hover:text-orange-500 transition font-medium"
                    :class="$route.path === '/jobs' ? 'font-bold text-white bg-custom-brand-700 px-3 py-1 rounded' : 'text-custom-brand-500'">
                    Jobs
                </router-link>
                <router-link to="/application" class="hover:text-orange-500 transition font-medium"
                    :class="$route.path === '/application' ? 'font-bold text-white bg-custom-brand-700 px-3 py-1 rounded' : 'text-custom-brand-500'">
                    Application
                </router-link>
            </nav>

            <!-- Login Button -->
            <div class="hidden md:block">
                <router-link to="/login"
                    class="bg-custom-brand-700 text-white px-5 py-2 rounded-xl font-semibold hover:bg-orange-800 transition shadow">
                    Login
                </router-link>
            </div>

            <!-- Mobile menu button -->
            <button class="md:hidden text-custom-brand-500 focus:outline-none" @click="isOpen = !isOpen">
                <svg v-if="!isOpen" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isOpen" class="md:hidden bg-gray-900 border-t border-gray-800 flex flex-col px-6 py-4 space-y-2">
            <router-link to="/" class="text-custom-brand-500 hover:text-orange-500 transition font-medium"
                :class="$route.path === '/' ? 'font-bold text-white bg-custom-brand-700 px-3 py-1 rounded' : ''"
                @click="isOpen = false">
                Home
            </router-link>
            <router-link to="/about" class="text-custom-brand-500 hover:text-orange-500 transition font-medium"
                :class="$route.path === '/about' ? 'font-bold text-white bg-custom-brand-700 px-3 py-1 rounded' : ''"
                @click="isOpen = false">
                About
            </router-link>
            <router-link to="/jobs" class="text-custom-brand-500 hover:text-orange-500 transition font-medium"
                :class="$route.path === '/jobs' ? 'font-bold text-white bg-custom-brand-700 px-3 py-1 rounded' : ''"
                @click="isOpen = false">
                Jobs
            </router-link>
            <router-link to="/application" class="text-custom-brand-500 hover:text-orange-500 transition font-medium"
                :class="$route.path === '/application' ? 'font-bold text-white bg-custom-brand-700 px-3 py-1 rounded' : ''"
                @click="isOpen = false">
                Application
            </router-link>
            <router-link to="/login"
                class="bg-custom-brand-700 text-white px-5 py-2 rounded-xl font-semibold hover:bg-orange-800 transition text-center shadow"
                @click="isOpen = false">
                Login
            </router-link>
        </div>
    </header>
</template>

<script setup>
import { ref } from "vue"
const isOpen = ref(false)
</script>
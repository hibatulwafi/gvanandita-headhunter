<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 w-full max-w-4xl">
      <!-- Left: Form -->
      <div class="p-8 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
        <p class="text-gray-500 mb-6">Login to your account</p>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input v-model="email" type="email" required
              class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              placeholder="you@example.com" />
          </div>

          <!-- Password -->
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div class="relative">
              <input v-model="password" :type="showPassword ? 'text' : 'password'" required
                class="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="••••••••" />
              <button type="button" @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-indigo-600"
                tabindex="-1">
                <span v-if="showPassword"><font-awesome-icon icon="eye-slash" class="mr-2" /></span>
                <span v-else><font-awesome-icon icon="eye" class="mr-2" /></span>
              </button>
            </div>
          </div>

          <!-- Remember me -->
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="remember" class="h-4 w-4 text-indigo-600 rounded" />
              <span class="text-gray-600">Remember me</span>
            </label>
            <a href="#" class="text-indigo-600 hover:underline">Forgot password?</a>
          </div>

          <!-- Submit -->
          <button type="submit"
            class="w-full bg-indigo-600 text-white py-2 rounded-xl font-semibold hover:bg-indigo-700 transition duration-200">
            Login
          </button>
        </form>

        <p class="text-center text-gray-500 text-sm mt-6">
          Don't have an account?
          <router-link to="/register" class="text-indigo-600 font-medium hover:underline">Sign up</router-link>
        </p>
      </div>

      <!-- Right: Image -->
      <div class="hidden md:flex items-center justify-center bg-indigo-50">
        <img src="/images/login-illustration.jpg" alt="Login Illustration" class="w-full h-full object-cover" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue"

const email = ref("")
const password = ref("")
const remember = ref(false)
const showPassword = ref(false)

const handleLogin = () => {
  console.log("Email:", email.value)
  console.log("Password:", password.value)
  console.log("Remember:", remember.value)
  alert("Login clicked!")
}
</script>

<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="bg-white rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 w-full max-w-4xl">
      <!-- Left: Form -->
      <div class="p-8 flex flex-col justify-center">
        <h2 class="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h2>
        <p class="text-gray-500 mb-6">Login to your account</p>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Pesan Error -->
          <div v-if="authStore.error"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl relative" role="alert">
            <span class="block sm:inline">{{ authStore.error }}</span>
          </div>

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
                class="w-full px-4 py-2 pr-10 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                placeholder="••••••••" />
              <button type="button" @click="showPassword = !showPassword"
                class="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-custom-brand-700 focus:outline-none"
                tabindex="-1">
                <font-awesome-icon :icon="showPassword ? 'eye-slash' : 'eye'" />
              </button>
            </div>
          </div>

          <!-- Remember me -->
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center gap-2">
              <input type="checkbox" v-model="remember" class="h-4 w-4 text-custom-brand-700 rounded" />
              <span class="text-gray-600">Remember me</span>
            </label>
            <!-- <a href="#" class="text-custom-brand-700 hover:underline">Forgot password?</a> -->
          </div>

          <!-- Submit -->
          <button type="submit"
            class="w-full bg-custom-brand-500 text-white py-2 rounded-xl font-semibold hover:bg-custom-brand-800 transition duration-200 disabled:bg-indigo-400 disabled:cursor-not-allowed"
            :disabled="authStore.loading">
            <span v-if="authStore.loading">Loading...</span>
            <span v-else>Login</span>
          </button>
        </form>

        <p class="text-center text-gray-500 text-sm mt-6">
          New here?
          <router-link to="/register" class="text-custom-brand-700 font-medium hover:underline">Register Here!</router-link>
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
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Import dan tambahkan ikon Font Awesome
library.add(faEye, faEyeSlash);

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const remember = ref(false);
const showPassword = ref(false);

const handleLogin = async () => {
  // Clear any previous error before a new attempt
  authStore.error = null;
  const success = await authStore.login({
    email: email.value,
    password: password.value,
  });

  if (success) {
    router.push({ name: "profile" });
  }
};
</script>

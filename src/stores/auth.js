import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import router from "@/router"; // Impor router untuk pengalihan

// Konfigurasi baseURL dari variabel lingkungan
const API_BASE_URL = import.meta.env.VITE_APP_API_URL;
axios.defaults.baseURL = API_BASE_URL;

// Mengizinkan Axios mengirim kredensial (cookies)
axios.defaults.withCredentials = true;

export const useAuthStore = defineStore("auth", () => {
  // State
  const token = ref(localStorage.getItem("token"));
  const user = ref(JSON.parse(localStorage.getItem("user")));
  const loading = ref(false);
  const error = ref(null);

  // Getters
  const isAuthenticated = computed(() => !!token.value);
  const getUser = computed(() => user.value);

  // Aksi
  async function login(credentials) {
    loading.value = true;
    error.value = null;


    console.log("Token:", token.value);
    console.log("User:", user.value);
    console.log("Loading:", loading.value);
    console.log("Error:", error.value);
    console.log("API Base URL:", API_BASE_URL);
    console.log("Credentials:", credentials);
    try {
      const response = await axios.post("/candidate/login", credentials);
      token.value = response.data.token;
      user.value = response.data.user;

      // Simpan ke localStorage untuk mempertahankan sesi
      localStorage.setItem("token", token.value);
      localStorage.setItem("user", JSON.stringify(user.value));
      return true;
    } catch (e) {
      if (e.response) {
        // Server merespons dengan kode status di luar 2xx
        if (e.response.status === 401) {
          error.value = "Email atau password salah.";
        } else {
          error.value = e.response.data.message || "Terjadi kesalahan pada server.";
        }
      } else if (e.request) {
        // Permintaan dibuat, tetapi tidak ada respons yang diterima
        error.value = "Tidak dapat terhubung ke server. Periksa koneksi Anda atau coba lagi nanti.";
      } else {
        // Kesalahan dalam menyiapkan permintaan
        error.value = "Terjadi kesalahan tidak terduga.";
      }
      return false;
    } finally {
      loading.value = false;
    }
  }

  function logout() {
    token.value = null;
    user.value = null;
    // Hapus dari localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Alihkan ke halaman login
    router.push({ name: "login" });
  }

  async function register(formData) {
    loading.value = true;
    error.value = null;

    try {
      const payload = new FormData();
      for (const key in formData) {
        if (formData[key] !== null && formData[key] !== "") {
          payload.append(key, formData[key]);
        }
      }

      // kalau ada file resume
      if (formData.resumeFile) {
        payload.append("resume_path", formData.resumeFile);
      }

      const response = await axios.post("/candidate/register", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // Backend sebaiknya return { user, token }
      token.value = response.data.token;
      user.value = response.data.user;

      localStorage.setItem("token", token.value);
      localStorage.setItem("user", JSON.stringify(user.value));

      // langsung arahkan ke profile
      router.push({
        name: "profile",
      });

      return true;
    } catch (e) {
      if (e.response) {
        error.value = e.response.data.message || "Registrasi gagal.";
      } else {
        error.value = "Tidak dapat terhubung ke server.";
      }
      return false;
    } finally {
      loading.value = false;
    }
  }

  // Interceptor untuk menyisipkan token ke setiap permintaan
  axios.interceptors.request.use(
    (config) => {
      const authStore = useAuthStore();
      if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  // Interceptor untuk menangani respons yang tidak terotorisasi
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const authStore = useAuthStore();
      if (error.response && (error.response.status === 401 || error.response.status === 403)) {
        authStore.logout();
      }
      return Promise.reject(error);
    }
  );

  return {
    token,
    user,
    loading,
    error,
    isAuthenticated,
    getUser,
    login,
    logout,
    register,
  };
});

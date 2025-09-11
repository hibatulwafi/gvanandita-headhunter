import { defineStore } from "pinia";
import { ref, computed } from "vue";
import axios from "axios";
import router from "@/router";

const API_BASE_URL = import.meta.env.VITE_APP_API_URL;
axios.defaults.baseURL = API_BASE_URL;
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

    try {
      const response = await axios.post("/candidate/login", credentials);
      token.value = response.data.token;
      user.value = response.data.user;

      localStorage.setItem("token", token.value);
      localStorage.setItem("user", JSON.stringify(user.value));
      return true;
    } catch (e) {
      if (e.response) {
        if (e.response.status === 401) {
          error.value = "Email atau password salah.";
        } else {
          error.value = e.response.data.message || "Terjadi kesalahan pada server.";
        }
      } else if (e.request) {
        error.value = "Tidak dapat terhubung ke server. Periksa koneksi Anda atau coba lagi nanti.";
      } else {
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
    localStorage.removeItem("token");
    localStorage.removeItem("user");
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

      if (formData.resumeFile) {
        payload.append("resume_path", formData.resumeFile);
      }

      const response = await axios.post("/candidate/register", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      token.value = response.data.token;
      user.value = response.data.user;

      localStorage.setItem("token", token.value);
      localStorage.setItem("user", JSON.stringify(user.value));

      router.push({ name: "profile" });

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

  async function updateProfile(payload) {
    loading.value = true;
    error.value = null;
    try {
      const response = await axios.put(`/candidate/profile`, payload);

      user.value = response.data.user;
      localStorage.setItem("user", JSON.stringify(user.value));

      return response.data; // success
    } catch (e) {
      if (e.response?.data) {
        throw e; // lempar ke caller
      }
      throw new Error("Tidak dapat terhubung ke server.");
    } finally {
      loading.value = false;
    }
  }

  // Interceptors
  axios.interceptors.request.use(
    (config) => {
      const authStore = useAuthStore();
      if (authStore.token) {
        config.headers.Authorization = `Bearer ${authStore.token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
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
    updateProfile,
  };
});

import { defineStore } from "pinia"
import axios from "axios"

export const useJobStore = defineStore("jobStore", {
  state: () => ({
    jobs: [],
    pagination: {},
    searchPosition: "",
    searchLocation: "",
    activeCountry: "All",
    loading: false,
    selectedJob: null,
    // ========================
    // Untuk riwayat apply
    // ========================
    applications: [],
    loadingApplications: false,
    applicationsError: null,
    filters: {
      job_location_types: [],
      experience_levels: [],
      job_types: [],
      categories: [],
    },
    selectedJobTypes: [],
    selectedLocations: [],
    selectedCategories: [],
    selectedLevels: [],
  }),

  actions: {
    async fetchJobs(page = 1, append = false) {
      this.loading = true
      try {
        const API_URL = import.meta.env.VITE_APP_API_URL
        const res = await axios.get(`${API_URL}/candidate/jobs`, {
          params: {
            page,
            per_page: 10,
            position: this.searchPosition,
            location: this.searchLocation,
            country: this.activeCountry !== "All" ? this.activeCountry : null,
            job_types: this.selectedJobTypes,
            job_location_types: this.selectedLocations,
            categories: this.selectedCategories,
            levels: this.selectedLevels,
          },
        })

        if (append && page > 1) {
          // tambahkan data baru ke jobs lama
          this.jobs = [...this.jobs, ...res.data.data]
        } else {
          // replace kalau halaman pertama / refresh
          this.jobs = res.data.data
        }

        this.pagination = res.data
      } catch (error) {
        console.error("Error fetching jobs:", error)
      } finally {
        this.loading = false
      }
    },

    async fetchFilters() {
      const API_URL = import.meta.env.VITE_APP_API_URL
      const res = await axios.get(`${API_URL}/candidate/jobs-filters`)
      this.filters = res.data
    },

    async fetchJobById(id) {
      this.loading = true
      try {
        const API_URL = import.meta.env.VITE_APP_API_URL
        const res = await axios.get(`${API_URL}/candidate/jobs/${id}`)
        this.selectedJob = res.data
        return res.data
      } catch (error) {
        console.error("Error fetching job detail:", error)
        throw error
      } finally {
        this.loading = false
      }
    },

    async applyToJob(jobId) {
      this.loading = true
      try {
        const API_URL = import.meta.env.VITE_APP_API_URL
        const token = localStorage.getItem("token")

        if (!token) {
          throw new Error("Anda harus login untuk melamar pekerjaan.")
        }

        // HANYA kirim job_listing_id
        const payload = { job_listing_id: jobId }

        const res = await axios.post(
          `${API_URL}/candidate/applications`,
          payload,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
            },
          }
        )

        return res.data
      } catch (e) {
        console.error("Apply error:", e.response?.data || e.message)
        if (e.response?.data?.message) {
          throw new Error(e.response.data.message)
        }
        throw new Error("Gagal melamar pekerjaan.")
      } finally {
        this.loading = false
      }
    },

    async fetchApplyHistory(page = 1) {
      this.loadingApplications = true
      try {
        const API_URL = import.meta.env.VITE_APP_API_URL
        const token = localStorage.getItem("token")
        if (!token) throw new Error("Anda harus login untuk melihat riwayat apply.")

        const res = await axios.get(`${API_URL}/candidate/applications/history`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
          params: { page, per_page: 10 },
        })

        if (page === 1) {
          this.applications = res.data.data
        } else {
          this.applications.push(...res.data.data)
        }

        this.paginationApplications = res.data
      } catch (e) {
        console.error("Error fetching history:", e.response?.data || e.message)
      } finally {
        this.loadingApplications = false
      }
    },

    setCountry(country) {
      this.activeCountry = country
      this.fetchJobs(1)
    },
  },

  getters: {
    countries: (state) => {
      const list = [{ name: "All", label: "All" }]
      state.jobs.forEach((job) => {
        if (job.country && !list.find((c) => c.name === job.country)) {
          list.push({ name: job.country, label: job.country })
        }
      })
      return list
    },
  },
})

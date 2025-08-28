import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import JobBoard from "@/pages/JobBoard.vue";
import Login from "@/pages/Login.vue";
import Application from "@/pages/Application.vue";
import CandidateForm from "@/pages/CandidateForm.vue";
import CandidateProfile from "@/pages/CandidateProfile.vue";
import NotFound from "@/pages/NotFound.vue";
import Register from "@/pages/Register.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/jobs", name: "job-board", component: JobBoard },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/application", name: "application", component: Application },
  { path: "/candidates/new", name: "new-candidate", component: CandidateForm },
  { path: "/candidates/:id", name: "candidate-profile", component: CandidateProfile, props: true }, // Menggunakan parameter dinamis untuk ID
  // Route catch-all untuk halaman 404
  { path: "/:catchAll(.*)", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

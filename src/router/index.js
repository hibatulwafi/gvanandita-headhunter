import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import About from "@/pages/About.vue";
import Login from "@/pages/Login.vue";
import JobBoard from "@/pages/JobBoard.vue";
import CandidateForm from "@/pages/CandidateForm.vue";
import CandidateProfile from "@/pages/CandidateProfile.vue";
import NotFound from "@/pages/NotFound.vue";
import Register from "@/pages/Register.vue";
import Profile from "@/pages/Profile.vue";
import JobDetail from "@/pages/JobDetail.vue";
import Application from "@/pages/Application.vue";
import ApplicationHistory from "../pages/ApplicationHistory.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/about", name: "about", component: About },
  { path: "/jobs", name: "job-board", component: JobBoard },
  { path: "/jobs/:id", name: "job-detail", component: JobDetail, props: true },
  { path: "/login", name: "login", component: Login },
  { path: "/register", name: "register", component: Register },
  { path: "/application", name: "application", component: Application },
  { path: "/application-history", name: "application-history", component: ApplicationHistory },
  { path: "/candidates/new", name: "new-candidate", component: CandidateForm },
  { path: "/candidates/:id", name: "candidate-profile", component: CandidateProfile, props: true }, // Menggunakan parameter dinamis untuk ID
  // Route catch-all untuk halaman 404
  { path: "/profile", name: "profile", component: Profile },
  { path: "/:catchAll(.*)", name: "not-found", component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

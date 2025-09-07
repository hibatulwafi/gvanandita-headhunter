import { createApp } from "vue"
import { createPinia } from "pinia"
import "./assets/main.css"
import App from "./App.vue"
import router from "./router"
import "aos/dist/aos.css"
import AOS from "aos"
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
    faHome,
    faUser,
    faBriefcase,
    faSignInAlt,
    faEye,
    faEyeSlash,
    faEnvelope,
    faPhone,
    faMapMarker,
    faMapMarkerAlt,
    faChevronRight,
    faChevronLeft,
    faUsers,
    faSearch,
    faNetworkWired,
    faUserTie,
    faAward,
    faHourglassHalf,
    faHandshake,
    faClipboardCheck,
    faEdit,
    faBuilding
} from '@fortawesome/free-solid-svg-icons';

// Daftarkan semua ikon yang dibutuhkan
library.add(
    faHome,
    faUser,
    faBriefcase,
    faSignInAlt,
    faEye,
    faEyeSlash,
    faEnvelope,
    faPhone,
    faMapMarker,
    faMapMarkerAlt,
    faChevronRight,
    faChevronLeft,
    faUsers,
    faSearch,
    faNetworkWired,
    faUserTie,
    faAward,
    faHourglassHalf,
    faHandshake,
    faClipboardCheck,
    faEdit,
    faBuilding
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)
app.mount("#app")
AOS.init({
    duration: 800,   // durasi animasi (ms)
    once: true,      // animasi jalan sekali saja
    offset: 100,     // jarak trigger animasi
})
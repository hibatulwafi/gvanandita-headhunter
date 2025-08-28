import { createApp } from "vue"
import { createPinia } from "pinia"
import "./assets/main.css"
import App from "./App.vue"
import router from "./router"
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
    faChevronRight,
    faChevronLeft,
    faUsers,
    faSearch,
    // Ikon baru yang ditambahkan
    faNetworkWired,
    faUserTie,
    faAward,
    faHourglassHalf,
    faHandshake,
    faClipboardCheck,
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
    faChevronRight,
    faChevronLeft,
    faUsers,
    faSearch,
    // Daftarkan ikon-ikon baru di sini
    faNetworkWired,
    faUserTie,
    faAward,
    faHourglassHalf,
    faHandshake,
    faClipboardCheck,
);

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(createPinia())
app.use(router)
app.mount("#app")
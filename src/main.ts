import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";
import firebaseApp from "./firebase";
import Vue3Lottie from 'vue3-lottie'
import vuetify from './plugins/vuetify';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faNewspaper, faUser, faCalendar, faGraduationCap, faIdBadge, faSchool, faStar, faFaceGrimace, faHammer, faUserGear, faDoorClosed, faSearch, faTrophy, faWallet, faFaceMeh, faPersonBooth, faArrowLeftRotate, faCheckCircle, faHourglass, faFire, faBook } from '@fortawesome/free-solid-svg-icons'
library.add(faNewspaper, faUser, faCalendar, faGraduationCap, faIdBadge, faSchool, faStar, faFaceGrimace, faHammer, faUserGear, faDoorClosed, faSearch, faTrophy, faWallet, faFaceMeh, faPersonBooth, faArrowLeftRotate, faCheckCircle, faHourglass, faFire, faBook)

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(VueFire, {
    // imported above but could also just be created here
    firebaseApp,
    modules: [
        // we will see other modules later on
        VueFireAuth(),
    ],
});
app.use(Vue3Lottie)
app.use(vuetify)
app.component('font-awesome-icon', FontAwesomeIcon)
app.component('VueDatePicker', VueDatePicker);

app.mount("#app");


import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import { createPinia } from "pinia";
import { VueFire, VueFireAuth } from "vuefire";
import firebaseApp from "./firebase";
import Vue3Lottie from 'vue3-lottie'
import vuetify from './plugins/vuetify';

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

app.mount("#app");


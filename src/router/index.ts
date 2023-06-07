import { createRouter, createWebHistory, useRoute } from "vue-router";
import routes from "./routes";
// import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import { getAuth } from "firebase/auth";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

// router.beforeResolve(async (to, from, next) => {
//     const userStore = useUserStore();
//     const { isAdmin, isConnected } = storeToRefs(userStore);
//     const { signinWithToken } = userStore;
//     const route = useRoute();

//     if (!isConnected.value) {
//         if (refreshToken.value) {
//             try {
//                 await signinWithToken(refreshToken.value);
//             } catch (error) {
//                 console.error(error)
//             }
//         }
//     }

//     if (to?.meta?.requiresAuth) {
//         if (!isConnected.value) next({ name: 'login' })
//         else if (to?.meta?.requiresAdmin) {
//             if (!isAdmin.value) next({ name: 'login' });
//             else next();
//         } else next();
//     } else {
//         next();
//     }
// })

router.beforeEach(async (to, from, next) => {
    const auth = getAuth();
    const user = auth.currentUser;

    // Force all users to be redirected to signin page if not connected into firebase
    if (!user && to.name !== "signin") {
        next({ name: "signin" });
    } else {
        next();
    }
    // TODO: see if we can remove this filter for clients when consultants proposing profiles
});

export default router;

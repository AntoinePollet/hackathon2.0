import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { User, getAuth } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuth } from "@/composables/onAuthStateChanged";
import { storeToRefs } from "pinia";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

const authComposable = useAuth();
const { state, authenticatedUser } = authComposable;

export async function getCurrentUser(): Promise<User | null> {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

router.beforeEach(async (to, from, next) => {
    await state();

    // To allow public access to a route, add into routes.ts:
    // meta: {
    //     publicAccess: true,
    // },
    if (to.matched.some((record) => record.meta.publicAccess)) {
        next();
    } else {
        const currentUser = await getCurrentUser();
        if (currentUser) {
            next();
        } else if (to.name !== "signin") {
            next({ name: "signin" });
        } else {
            next();
        }
    }
});

export default router;

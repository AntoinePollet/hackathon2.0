import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";
import { User } from "firebase/auth";
import { auth } from "@/firebase";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

async function getCurrentUser(): Promise<User | null> {
    return new Promise((resolve, reject) => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

router.beforeEach(async (to, from, next) => {
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

import { onAuthStateChanged, getAuth } from "firebase/auth";
import { ref } from "vue";

export const useAuth = () => {
    const authenticatedUser = ref();

    const state = () => onAuthStateChanged(getAuth(), async (userAuth) => {
        if (userAuth) {
            userAuth.getIdTokenResult().then(function ({ claims }) {
                authenticatedUser.value = claims;
                console.log('authenticatedUser', authenticatedUser.value)
            });
        }
    });

    return { authenticatedUser, state }
}
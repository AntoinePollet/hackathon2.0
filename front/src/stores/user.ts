import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import type { SigninI, SignupI } from '@/interfaces/security';
import { useRouter } from "vue-router"
import { UpdateUser } from '@/interfaces/user';

export const useUserStore = defineStore('user', () => {
    const router = useRouter();
    const user = ref()
    const users = ref([]);

    const isAdmin = computed(() => {
        return user.value?.roles?.includes('ROLE_ADMIN');
    });

    const isVIP = computed(() => {
        return user.value?.roles?.includes('ROLE_VIP') || user.value?.roles?.includes('ROLE_VVIP') || user.value?.roles?.includes('ROLE_ADMIN');
    });

    const isConnected = computed(() => {
        return !!user.value?.email;
    });

    async function toggleAdmin() {
        if (user.value) {
            if (user.value.roles?.includes('ROLE_ADMIN')) {
                user.value.roles = ['ROLE_USER']
            } else {
                user.value.roles = ['ROLE_ADMIN']
            }
        }
    }

    async function signin(payload: SigninI) {
        try {

        } catch (error) {
            throw error;
        }
    }

    async function signup(payload: SignupI) {
        try {
        } catch (error) {
            throw error;
        }
    }

    async function signinWithToken(refreshToken: string) {
        try {

        } catch (error) {
            throw error;
        }
    }

    async function changePassword(payload: { password: string, newPassword: string }): Promise<void> {
        try {
        } catch (error) {
            throw error;
        }
    }

    async function resetPassword(payload: { email: string }): Promise<void> {
        try {
        } catch (error) {
            throw error;
        }
    }

    async function validateResetPassword(payload: { token: string, password: string }): Promise<void> {
        try {
        } catch (error) {
            throw error;
        }
    }

    async function checkTokenValidity(payload: { token: string }) {
        try {
        } catch (error) {
            throw error;
        }
    }

    async function logout() {
        try {

        } catch (error) {
            throw error;
        }
    }

    async function getUsers() {
        try {
        } catch (error) {
            throw error;
        }
    }

    async function updateUser(payload: UpdateUser) {
        try {

        } catch (error) {
            throw error;
        }
    }

    return {}
});
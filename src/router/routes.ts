import Home from "@/components/home.vue"
import Events from "@/views/events.vue"
import Register from "@/views/register.vue"
import Login from "@/views/login.vue"

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/events',
        name: 'events',
        component: Events
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
]
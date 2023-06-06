import Home from "@/components/home.vue"
import Events from "@/views/events.vue"
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
]
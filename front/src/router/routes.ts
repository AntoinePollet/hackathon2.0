import User from "@/views/User/User.vue"
import Admin from "@/views/Admin/Admin.vue"
import Client from "@/views/Client/Client.vue"
import Session from "@/views/Session/Session.vue"
import Signin from "@/components/Session/Signin.vue";
import PasswordForgot from "@/components/Session/PasswordForgot.vue";

export default [
    {
        path: '/',
        name: '',
        component: User,
    },
    {
        path: '/client',
        name: '',
        component: Client,
    },
    {
        path: '/admin',
        name: '',
        component: Admin,
    },
    {
        path: '/session',
        name: '',
        component: Session,
        children: [
            { path: 'signin', name: 'signin', component: Signin },
            { path: 'password-forgot', name: 'password-forgot', component: PasswordForgot },
        ]
    }
]
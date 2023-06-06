import User from "@/views/User/User.vue"
import Admin from "@/views/Admin/Admin.vue"
import Client from "@/views/Client/Client.vue"
import Session from "@/views/Session/Session.vue"
import Signin from "@/components/Session/Signin.vue";
import PasswordForgot from "@/components/Session/PasswordForgot.vue";
import UserProfileShow from "@/components/Profile/Show.vue";
import UserProfileEdit from "@/components/Profile/Edit.vue";
import UsersList from "@/components/Admin/User/List.vue";
import UsersShow from "@/components/Admin/User/Show.vue";
import UsersEdit from "@/components/Admin/User/Edit.vue";

export default [
    {
        path: '/',
        name: '',
        component: User,
        children: [
            { path: 'profile', name: 'profile-show', component: UserProfileShow},
            { path: 'profile/edit', name: 'profile-edit', component: UserProfileEdit},
        ]
    },
    {
        path: '/client',
        name: '',
        component: Client,
        children: [
            { path: 'profile', name: 'profile-show', component: UserProfileShow},
            { path: 'profile/edit', name: 'profile-edit', component: UserProfileEdit},
        ]
    },
    {
        path: '/admin',
        name: '',
        component: Admin,
        children: [
            { path: 'users', name: 'users-list', component: UsersList },
            { path: 'user/:id', name: 'users-show', component: UsersShow },
            { path: 'user/:id/edit', name: 'users-edit', component: UsersEdit },
        ]
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
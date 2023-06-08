export default [
    {
        path: "/",
        name: "",
        component: () => import("@/views/User/User.vue"),
        children: [
            {
                path: "",
                name: "news-list",
                component: () => import("@/views/Events/events.vue"),
            },
            {
                path: "profile",
                name: "profile-show",
                component: () => import("@/views/Profile/Show.vue"),
            },
            {
                path: "profile/edit",
                name: "profile-edit",
                component: () => import("@/views/Profile/Edit.vue"),
            },
            {
                path: "plannings",
                name: "plannings-list",
                component: () => import("@/views/User/Planning/List.vue"),
            },
            {
                path: "planning/:id",
                name: "plannings-show",
                component: () => import("@/views/User/Planning/Show.vue"),
            },
            {
                path: "planning/:id/edit",
                name: "plannings-edit",
                component: () => import("@/views/User/Planning/Edit.vue"),
            },
            {
                path: "achievements",
                name: "achievements-list",
                component: () => import("@/views/User/Achievement/List.vue"),
            },
            {
                path: "achievement/:id",
                name: "achievements-show",
                component: () => import("@/views/User/Achievement/Show.vue"),
            },
            {
                path: "achievement/:id/edit",
                name: "achievements-edit",
                component: () => import("@/views/User/Achievement/Edit.vue"),
            },
            {
                path: "trainings",
                name: "trainings-list",
                component: () => import("@/views/User/Training/List.vue"),
            },
            {
                path: "training/:id",
                name: "trainings-show",
                component: () => import("@/views/User/Training/Show.vue"),
            },
            {
                path: "evaluation/:id",
                name: "evaluation-show",
                component: () => import("@/views/User/Evaluation/Show.vue"),
            },
            {
                path: "evaluation/:id/edit",
                name: "evaluations-edit",
                component: () => import("@/views/User/Evaluation/Edit.vue"),
            },
        ],
    },
    {
        path: "/client",
        name: "",
        component: () => import("@/views/Client/Client.vue"),
        children: [
            {
                path: "profile",
                name: "client-profile-show",
                component: () => import("@/views/Profile/Show.vue"),
                meta: {
                    publicAccess: true,
                },
            },
            {
                path: "profile/edit",
                name: "client-profile-edit",
                component: () => import("@/views/Profile/Edit.vue"),
            },
            {
                path: "plannings",
                name: "client-plannings-list",
                component: () => import("@/views/Client/Planning/List.vue"),
            },
            {
                path: "planning/:id",
                name: "client-plannings-show",
                component: () => import("@/views/Client/Planning/Show.vue"),
            },
            {
                path: "planning/:id/edit",
                name: "client-plannings-edit",
                component: () => import("@/views/Client/Planning/Edit.vue"),
            },
        ],
    },
    {
        path: "/admin",
        name: "",
        component: () => import("@/views/Admin/Admin.vue"),
        children: [
            {
                path: "employees",
                name: "admin-employees-list",
                component: () => import("@/views/Admin/Employee/List.vue"),
            },
            {
                path: "employee/:id",
                name: "admin-employees-show",
                component: () => import("@/views/Admin/Employee/Show.vue"),
            },
            {
                path: "employee/:id/edit",
                name: "admin-employees-edit",
                component: () => import("@/views/Admin/Employee/Edit.vue"),
            },
            {
                path: "plannings",
                name: "admin-plannings-list",
                component: () => import("@/views/Admin/Planning/List.vue"),
            },
            {
                path: "plannings/create",
                name: "admin-plannings-create",
                component: () => import("@/views/Admin/Planning/Create.vue"),
            },
            {
                path: "planning/:id",
                name: "admin-plannings-show",
                component: () => import("@/views/Admin/Planning/Show.vue"),
            },
            {
                path: "planning/:id/edit",
                name: "admin-plannings-edit",
                component: () => import("@/views/Admin/Planning/Edit.vue"),
            },
            {
                path: "achievements",
                name: "admin-achievements-list",
                component: () => import("@/views/Admin/Achievement/List.vue"),
            },
            {
                path: "achievements/create",
                name: "admin-achievements-create",
                component: () => import("@/views/Admin/Achievement/Create.vue"),
            },
            {
                path: "achievement/:id",
                name: "admin-achievements-show",
                component: () => import("@/views/Admin/Achievement/Show.vue"),
            },
            {
                path: "achievement/:id/edit",
                name: "admin-achievements-edit",
                component: () => import("@/views/Admin/Achievement/Edit.vue"),
            },
            {
                path: "trainings",
                name: "admin-trainings-list",
                component: () => import("@/views/Admin/Training/List.vue"),
            },
            {
                path: "trainings/create",
                name: "admin-trainings-create",
                component: () => import("@/views/Admin/Training/Create.vue"),
            },
            {
                path: "training/:id",
                name: "admin-trainings-show",
                component: () => import("@/views/Admin/Training/Show.vue"),
            },
            {
                path: "training/:id/edit",
                name: "admin-trainings-edit",
                component: () => import("@/views/Admin/Training/Edit.vue"),
            },
            {
                path: "news",
                name: "admin-news-list",
                component: () => import("@/views/Events/events.vue"),
            },
            {
                path: "news/create",
                name: "admin-news-create",
                component: () => import("@/views/Admin/News/Create.vue"),
            },
            {
                path: "news/:id/edit",
                name: "admin-news-edit",
                component: () => import("@/views/Admin/News/Edit.vue"),
            },
            {
                path: "skills",
                name: "admin-skills-list",
                component: () => import("@/views/Admin/Skills/List.vue"),
            },
            {
                path: "skills/create",
                name: "admin-skills-create",
                component: () => import("@/views/Admin/Skills/Create.vue"),
            },
            {
                path: "skills/:id/edit",
                name: "admin-skills-edit",
                component: () => import("@/views/Admin/Skills/Edit.vue"),
            },
            {
                path: "evaluations",
                name: "admin-evaluations",
                component: () => import("@/views/Admin/Evaluation/List.vue"),
            },
        ],
    },
    {
        path: "/session",
        name: "",
        component: () => import("@/views/Session/Session.vue"),
        children: [
            {
                path: "signin",
                name: "signin",
                component: () => import("@/views/Session/Session/Signin.vue"),
            },
            {
                path: "password-forgot",
                name: "password-forgot",
                component: () =>
                    import("@/views/Session/Session/PasswordForgot.vue"),
            },
        ],
    },
    {
        path: "/share/:id",
        component: () => import("@/views/Profile/Share.vue"),
        meta: {
            publicAccess: true,
        },
    },
    {
        path: "/:pathMatch(.*)*",
        component: () => import("@/views/NotFound.vue"),
    },
];

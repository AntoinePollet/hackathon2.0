import Events from "@/views/Events/events.vue";
import User from "@/views/User/User.vue";
import Admin from "@/views/Admin/Admin.vue";
import Client from "@/views/Client/Client.vue";
import Session from "@/views/Session/Session.vue";
import Signin from "@/views/Session/Session/Signin.vue";
import PasswordForgot from "@/views/Session/Session/PasswordForgot.vue";
import UserProfileShow from "@/views/Profile/Show.vue";
import UserProfileEdit from "@/views/Profile/Edit.vue";
import AdminEmployeesList from "@/views/Admin/Employee/List.vue";
import AdminEmployeesShow from "@/views/Admin/Employee/Show.vue";
import AdminEmployeesEdit from "@/views/Admin/Employee/Edit.vue";
import AdminEmployeesCreate from "@/views/Admin/Employee/Create.vue";
import AdminPlanningsList from "@/views/Admin/Planning/List.vue";
import AdminPlanningsShow from "@/views/Admin/Planning/Show.vue";
import AdminPlanningsEdit from "@/views/Admin/Planning/Edit.vue";
import AdminPlanningsCreate from "@/views/Admin/Planning/Create.vue";
import AdminAchievementsList from "@/views/Admin/Achievement/List.vue";
import AdminAchievementsShow from "@/views/Admin/Achievement/Show.vue";
import AdminAchievementsEdit from "@/views/Admin/Achievement/Edit.vue";
import AdminAchievementsCreate from "@/views/Admin/Achievement/Create.vue";
import AdminTrainingsList from "@/views/Admin/Training/List.vue";
import AdminTrainingsShow from "@/views/Admin/Training/Show.vue";
import AdminTrainingsEdit from "@/views/Admin/Training/Edit.vue";
import AdminTrainingsCreate from "@/views/Admin/Training/Create.vue";
import AdminNewsEdit from "@/views/Admin/News/Edit.vue";
import AdminNewsCreate from "@/views/Admin/News/Create.vue";
import AdminSkillsList from "@/views/Admin/Skills/List.vue";
import AdminSkillsEdit from "@/views/Admin/Skills/Edit.vue";
import AdminSkillsCreate from "@/views/Admin/Skills/Create.vue";
import PlanningsList from "@/views/User/Planning/List.vue";
import PlanningsShow from "@/views/User/Planning/Show.vue";
import PlanningsEdit from "@/views/User/Planning/Edit.vue";
import AchievementsList from "@/views/User/Achievement/List.vue";
import AchievementsShow from "@/views/User/Achievement/Show.vue";
import AchievementsEdit from "@/views/User/Achievement/Edit.vue";
import TrainingsList from "@/views/User/Training/List.vue";
import TrainingsShow from "@/views/User/Training/Show.vue";
import EvaluationsList from "@/views/User/Evaluation/List.vue";
import EvaluationsShow from "@/views/User/Evaluation/Show.vue";
import EvaluationsEdit from "@/views/User/Evaluation/Edit.vue";
import ClientPlanningsList from "@/views/Client/Planning/List.vue";
import ClientPlanningsShow from "@/views/Client/Planning/Show.vue";
import ClientPlanningsEdit from "@/views/Client/Planning/Edit.vue";

export default [
    {
        path: "/",
        name: "",
        component: User,
        children: [
            { path: "", name: "news-list", component: Events },
            {
                path: "profile",
                name: "profile-show",
                component: UserProfileShow,
            },
            {
                path: "profile/edit",
                name: "profile-edit",
                component: UserProfileEdit,
            },
            {
                path: "plannings",
                name: "plannings-list",
                component: PlanningsList,
            },
            {
                path: "planning/:id",
                name: "plannings-show",
                component: PlanningsShow,
            },
            {
                path: "planning/:id/edit",
                name: "plannings-edit",
                component: PlanningsEdit,
            },
            {
                path: "achievements",
                name: "achievements-list",
                component: AchievementsList,
            },
            {
                path: "achievement/:id",
                name: "achievements-show",
                component: AchievementsShow,
            },
            {
                path: "achievement/:id/edit",
                name: "achievements-edit",
                component: AchievementsEdit,
            },
            {
                path: "trainings",
                name: "trainings-list",
                component: TrainingsList,
            },
            {
                path: "training/:id",
                name: "trainings-show",
                component: TrainingsShow,
            },
            {
                path: "evaluations",
                name: "evaluations-list",
                component: EvaluationsList,
            },
            {
                path: "evaluation/:id",
                name: "evaluations-show",
                component: EvaluationsShow,
            },
            {
                path: "evaluation/:id/edit",
                name: "evaluations-edit",
                component: EvaluationsEdit,
            },
        ],
    },
    {
        path: "/client",
        name: "",
        component: Client,
        children: [
            {
                path: "profile",
                name: "client-profile-show",
                component: UserProfileShow,
            },
            {
                path: "profile/edit",
                name: "client-profile-edit",
                component: UserProfileEdit,
            },
            {
                path: "plannings",
                name: "client-plannings-list",
                component: ClientPlanningsList,
            },
            {
                path: "planning/:id",
                name: "client-plannings-show",
                component: ClientPlanningsShow,
            },
            {
                path: "planning/:id/edit",
                name: "client-plannings-edit",
                component: ClientPlanningsEdit,
            },
        ],
    },
    {
        path: "/admin",
        name: "",
        component: Admin,
        children: [
            {
                path: "employees",
                name: "admin-employees-list",
                component: AdminEmployeesList,
            },
            {
                path: "employees/create",
                name: "admin-employees-create",
                component: AdminEmployeesCreate,
            },
            {
                path: "employee/:id",
                name: "admin-employees-show",
                component: AdminEmployeesShow,
            },
            {
                path: "employee/:id/edit",
                name: "admin-employees-edit",
                component: AdminEmployeesEdit,
            },
            {
                path: "plannings",
                name: "admin-plannings-list",
                component: AdminPlanningsList,
            },
            {
                path: "plannings/create",
                name: "admin-plannings-create",
                component: AdminPlanningsCreate,
            },
            {
                path: "planning/:id",
                name: "admin-plannings-show",
                component: AdminPlanningsShow,
            },
            {
                path: "planning/:id/edit",
                name: "admin-plannings-edit",
                component: AdminPlanningsEdit,
            },
            {
                path: "achievements",
                name: "admin-achievements-list",
                component: AdminAchievementsList,
            },
            {
                path: "achievements/create",
                name: "admin-achievements-create",
                component: AdminAchievementsCreate,
            },
            {
                path: "achievement/:id",
                name: "admin-achievements-show",
                component: AdminAchievementsShow,
            },
            {
                path: "achievement/:id/edit",
                name: "admin-achievements-edit",
                component: AdminAchievementsEdit,
            },
            {
                path: "trainings",
                name: "admin-trainings-list",
                component: AdminTrainingsList,
            },
            {
                path: "trainings/create",
                name: "admin-trainings-create",
                component: AdminTrainingsCreate,
            },
            {
                path: "training/:id",
                name: "admin-trainings-show",
                component: AdminTrainingsShow,
            },
            {
                path: "training/:id/edit",
                name: "admin-trainings-edit",
                component: AdminTrainingsEdit,
            },
            { path: "news", name: "admin-news-list", component: Events },
            {
                path: "news/create",
                name: "admin-news-create",
                component: AdminNewsCreate,
            },
            {
                path: "news/:id/edit",
                name: "admin-news-edit",
                component: AdminNewsEdit,
            },
            {
                path: "skills",
                name: "admin-skills-list",
                component: AdminSkillsList,
            },
            {
                path: "skills/create",
                name: "admin-skills-create",
                component: AdminSkillsCreate,
            },
            {
                path: "skills/:id/edit",
                name: "admin-skills-edit",
                component: AdminSkillsEdit,
            },
        ],
    },
    {
        path: "/session",
        name: "",
        component: Session,
        children: [
            { path: "signin", name: "signin", component: Signin },
            {
                path: "password-forgot",
                name: "password-forgot",
                component: PasswordForgot,
            },
        ],
    },
    // {
    //     path: "/events",
    //     name: "events",
    //     component: Events,
    // },
    // {
    //     path: "/register",
    //     name: "register",
    //     component: Register,
    // },
    // {
    //     path: "/login",
    //     name: "login",
    //     component: Login,
    // },
    // {
    //     path: "/admin",
    //     name: "admin",
    //     component: Admin,
    // },
];

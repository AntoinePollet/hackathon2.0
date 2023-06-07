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
import AdminPlanningsList from "@/components/Admin/Planning/List.vue";
import AdminPlanningsShow from "@/components/Admin/Planning/Show.vue";
import AdminPlanningsEdit from "@/components/Admin/Planning/Edit.vue";
import AdminAchievementsList from "@/components/Admin/Achievement/List.vue";
import AdminAchievementsShow from "@/components/Admin/Achievement/Show.vue";
import AdminAchievementsEdit from "@/components/Admin/Achievement/Edit.vue";
import AdminTrainingsList from "@/components/Admin/Training/List.vue";
import AdminTrainingsShow from "@/components/Admin/Training/Show.vue";
import AdminTrainingsEdit from "@/components/Admin/Training/Edit.vue";
import NewsList from "@/components/User/News/List.vue";
import NewsShow from "@/components/User/News/Show.vue";
import NewsEdit from "@/components/User/News/Edit.vue";
import PlanningsList from "@/components/User/Planning/List.vue";
import PlanningsShow from "@/components/User/Planning/Show.vue";
import PlanningsEdit from "@/components/User/Planning/Edit.vue";
import AchievementsList from "@/components/User/Achievement/List.vue";
import AchievementsShow from "@/components/User/Achievement/Show.vue";
import AchievementsEdit from "@/components/User/Achievement/Edit.vue";
import TrainingsList from "@/components/User/Training/List.vue";
import TrainingsShow from "@/components/User/Training/Show.vue";
import TrainingsEdit from "@/components/User/Training/Edit.vue";
import EvaluationsList from "@/components/User/Evaluation/List.vue";
import EvaluationsShow from "@/components/User/Evaluation/Show.vue";
import EvaluationsEdit from "@/components/User/Evaluation/Edit.vue";
import ClientPlanningsList from "@/components/Client/Planning/List.vue";
import ClientPlanningsShow from "@/components/Client/Planning/Show.vue";
import ClientPlanningsEdit from "@/components/Client/Planning/Edit.vue";

export default [
    {
        path: '/',
        name: '',
        component: User,
        children: [
            { path: '', name: 'news-list', component: NewsList},
            { path: 'profile', name: 'profile-show', component: UserProfileShow},
            { path: 'profile/edit', name: 'profile-edit', component: UserProfileEdit},
            { path: 'plannings', name: 'plannings-list', component: PlanningsList },
            { path: 'planning/:id', name: 'plannings-show', component: PlanningsShow },
            { path: 'planning/:id/edit', name: 'plannings-edit', component: PlanningsEdit },
            { path: 'achievements', name: 'achievements-list', component: AchievementsList },
            { path: 'achievement/:id', name: 'achievements-show', component: AchievementsShow },
            { path: 'achievement/:id/edit', name: 'achievements-edit', component: AchievementsEdit },
            { path: 'trainings', name: 'trainings-list', component: TrainingsList },
            { path: 'training/:id', name: 'trainings-show', component: TrainingsShow },
            { path: 'training/:id/edit', name: 'trainings-edit', component: TrainingsEdit },
            { path: 'evaluations', name: 'evaluations-list', component: EvaluationsList },
            { path: 'evaluation/:id', name: 'evaluations-show', component: EvaluationsShow },
            { path: 'evaluation/:id/edit', name: 'evaluations-edit', component: EvaluationsEdit },
        ]
    },
    {
        path: '/client',
        name: '',
        component: Client,
        children: [
            { path: 'profile', name: 'client-profile-show', component: UserProfileShow},
            { path: 'profile/edit', name: 'client-profile-edit', component: UserProfileEdit},
            { path: 'plannings', name: 'client-plannings-list', component: ClientPlanningsList },
            { path: 'planning/:id', name: 'client-plannings-show', component: ClientPlanningsShow },
            { path: 'planning/:id/edit', name: 'client-plannings-edit', component: ClientPlanningsEdit },
        ]
    },
    {
        path: '/admin',
        name: '',
        component: Admin,
        children: [
            { path: 'users', name: 'admin-users-list', component: UsersList },
            { path: 'user/:id', name: 'admin-users-show', component: UsersShow },
            { path: 'user/:id/edit', name: 'admin-users-edit', component: UsersEdit },
            { path: 'plannings', name: 'admin-plannings-list', component: AdminPlanningsList },
            { path: 'planning/:id', name: 'admin-plannings-show', component: AdminPlanningsShow },
            { path: 'planning/:id/edit', name: 'admin-plannings-edit', component: AdminPlanningsEdit },
            { path: 'achievements', name: 'admin-achievements-list', component: AdminAchievementsList },
            { path: 'achievement/:id', name: 'admin-achievements-show', component: AdminAchievementsShow },
            { path: 'achievement/:id/edit', name: 'admin-achievements-edit', component: AdminAchievementsEdit },
            { path: 'trainings', name: 'admin-trainings-list', component: AdminTrainingsList },
            { path: 'training/:id', name: 'admin-trainings-show', component: AdminTrainingsShow },
            { path: 'training/:id/edit', name: 'admin-trainings-edit', component: AdminTrainingsEdit },
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
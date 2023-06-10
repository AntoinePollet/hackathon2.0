import { defineStore } from "pinia";
import { computed, ref } from "vue";
import type { SigninI, SignupI } from "@/interfaces/security";
import { useRouter } from "vue-router";
import { JobI, TrainingI, UpdateUser, UserI } from "@/interfaces/user";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth, usersRef, firestoreDB } from "@/firebase";
import { query, where, getDocs, collection, doc, addDoc } from "firebase/firestore";
import { useDocument } from "vuefire";
import { faker } from '@faker-js/faker';
import { SkillsI } from "@/interfaces/skills";

const technologiesAndSoftSkills: string[] = [
    "JavaScript",
    "Python",
    "Java",
    "HTML",
    "CSS",
    "React",
    "Angular",
    "Vue.js",
    "Node.js",
    "Express.js",
    "Django",
    "Flask",
    "SQL",
    "NoSQL",
    "Git",
    "Agile Development",
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Leadership",
    "Creativity",
    "Critical Thinking",
    "Attention to Detail",
    "RESTful APIs",
    "GraphQL",
    "TypeScript",
    "PHP",
    "Ruby",
    "C#",
    "ASP.NET",
    "Spring Framework",
    "AWS",
    "Azure",
    "Google Cloud Platform",
    "Docker",
    "Kubernetes",
    "Machine Learning",
    "Data Science",
    "Test-Driven Development",
    "Continuous Integration/Continuous Deployment (CI/CD)",
    "UI/UX Design",
    "Mobile App Development",
    "Cybersecurity",
    "Agile Project Management",
    "Empathy",
    "Conflict Resolution",
    "Presentation Skills",
    "Negotiation Skills",
    "Critical Feedback",
    "Emotional Intelligence",
    "Decision Making",
    "Active Listening"
];

function generateRandomNumber(): number {
    return Math.floor(Math.random() * 10) + 4;
}

function getRandomValueFromArray(array: any[]): any {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateRandomUuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const useUserStore = defineStore("user", () => {
    const router = useRouter();
    const user = ref();
    const users = ref<UserI[]>([]);

    const userById = computed(() => {
        return (userId: string) => {
            return users.value.find(user => user.uuid === userId)
        }
    });

    const isAdmin = computed(() => {
        return user.value?.roles?.includes("ROLE_ADMIN");
    });

    const isVIP = computed(() => {
        return (
            user.value?.roles?.includes("ROLE_VIP") ||
            user.value?.roles?.includes("ROLE_VVIP") ||
            user.value?.roles?.includes("ROLE_ADMIN")
        );
    });

    const isConnected = computed(() => {
        return !!user.value?.email;
    });

    async function toggleAdmin() {
        if (user.value) {
            if (user.value.roles?.includes("ROLE_ADMIN")) {
                user.value.roles = ["ROLE_USER"];
            } else {
                user.value.roles = ["ROLE_ADMIN"];
            }
        }
    }

    async function generateUsers() {
        for (let i = 0; i < 50; i++) {
            let user: UserI = {};
            user.firstname = faker.person.firstName();
            user.lastname = faker.person.lastName();
            user.position = faker.person.jobTitle();
            user.biography = faker.person.bio();
            user.birthdate = faker.date.birthdate().toString();
            user.email = faker.internet.email();
            user.role = "consultant";
            user.isAvailable = Math.random() < 0.5;
            user.hiredate = faker.date.between({ from: '2015-01-01T00:00:00.000Z', to: new Date().toString() }).toString();
            user.uuid = generateRandomUuid();
            user.skills = [];
            const skillsNumber = generateRandomNumber();
            for (let i = 0; i < skillsNumber; i++) {
                let skill: SkillsI = {};
                skill.name = getRandomValueFromArray(technologiesAndSoftSkills);
                skill.rating = Math.floor(Math.random() * 4) + 1;
                user.skills.push(skill);
            }
            user.training = [];
            const trainingNumber = generateRandomNumber();
            for (let i = 0; i < trainingNumber; i++) {
                let training: TrainingI = {};
                training.title = faker.company.catchPhraseAdjective();
                training.completed = Math.random() < 0.5;
                user.training.push(training);
            }
            user.jobs = [];
            const jobsNumber = generateRandomNumber();
            for (let i = 0; i < jobsNumber; i++) {
                let job: JobI = {};
                job.title = faker.person.jobTitle();
                job.compagny = faker.company.name();
                job.start_time = faker.date.between({ from: '2015-01-01T00:00:00.000Z', to: new Date().toString() }).toString();
                job.end_time = faker.date.between({ from: '2015-01-01T00:00:00.000Z', to: new Date().toString() }).toString();
                user.jobs.push(job);
            }
            await addDoc(collection(firestoreDB, "users"), user);
        }
    }
    async function signin(payload: SigninI) {
        try {
            const { email, password } = payload;
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    user.value = userCredential.user;
                    router.push("/");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    // const errorMessage = error.message;
                    alert(errorCode);
                });
        } catch (error) {
            throw error;
        }
    }

    async function signup(payload: SignupI) {
        try {
            const { email, password } = payload;
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential: any) => {
                    // Signed in
                    user.value = userCredential.user;
                    // ...
                })
                .catch((error: any) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    console.error("error signup", errorCode, errorMessage);
                    // ..
                });
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

    async function changePassword(payload: {
        password: string;
        newPassword: string;
    }): Promise<void> {
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

    async function validateResetPassword(payload: {
        token: string;
        password: string;
    }): Promise<void> {
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
            users.value = [];
            const q = query(usersRef, where('role', '==', 'consultant'))
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                //@ts-ignore
                users.value.push(doc.data());
            });
        } catch (error) {
            throw error;
        }
    }

    async function getUser(userId: string) {
        try {
            const someTodo = useDocument(doc(collection(firestoreDB, 'users'), userId));
            user.value = someTodo;
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

    return { signup, signin, getUsers, users, user, getUser, userById, generateUsers };
});

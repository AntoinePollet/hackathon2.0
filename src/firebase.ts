// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
    getFirestore,
    collection,
    orderBy,
    query,
    limit,
    getDocs,
    where,
} from "firebase/firestore";
import { useCollection, getCurrentUser } from "vuefire";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const firestoreDB = getFirestore(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(firebaseApp);

export { firestoreDB, auth };

const filteredEvents = query(collection(firestoreDB, 'events'), orderBy("created_at", "desc"))
export const eventsRef = useCollection(filteredEvents);
export const trainingsRef = useCollection(collection(firestoreDB, "trainings"));
export const planningsRef = useCollection(collection(firestoreDB, "plannings"));
//export const userPlanningsRef = useCollection(query(collection(firestoreDB, "plannings"), where("user_id", "==", (await getCurrentUser()).uid)))
//export const clientPlanningsRef = useCollection(query(collection(firestoreDB, "plannings"), where("client_id", "==", (await getCurrentUser()).uid)))
export const usersRolesRef = useCollection(
    collection(firestoreDB, "usersRoles")
);
export const usersRef = collection(firestoreDB, "users");

export default firebaseApp;

import { defineStore } from "pinia";
import { firestoreDB, trainingsRef } from "@/firebase";
import { addDoc, collection, getDocs, onSnapshot, doc, serverTimestamp, DocumentData, updateDoc, getDoc, deleteDoc} from "firebase/firestore";
import { AchievementDoc } from "@/interfaces/achievement";
export const useAchievementsStore = defineStore('achievements', () => {

    async function getAchievement(id: string) {
        try {
            const docData = await getDoc(doc(firestoreDB, "achievements", id));
            return docData.data();
        } catch (error) {

        }
    }

    async function getAchievements() {
        try {
            const querySnapshot = await getDocs(collection(firestoreDB, "achievements"));
            querySnapshot.forEach((doc: any) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {

        }
    }

    async function publishAchievement(achievementDoc: AchievementDoc): Promise<any> {
        try {
            const docRef = await addDoc(collection(firestoreDB, "achievements"), {
                title: achievementDoc.title,
                description: achievementDoc.description,
                icon:  achievementDoc.icon,
            });
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function updateAchievement(achievementDoc: AchievementDoc): Promise<any> {
        try {
            const docRef = doc(firestoreDB, "achievements", achievementDoc.id);

            await updateDoc(docRef ,{
                title: achievementDoc.title,
                description: achievementDoc.description,
                start_at:  achievementDoc.icon,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function deleteAchievement(id: string) : Promise<any> {
        try {
            const docRef = doc(firestoreDB, "achievements", id);

            await deleteDoc(docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { publishAchievement, updateAchievement, getAchievements, getAchievement, deleteAchievement }
})
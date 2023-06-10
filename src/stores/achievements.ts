import { defineStore } from "pinia";
import { firestoreDB } from "@/firebase";
import { addDoc, collection, getDocs, onSnapshot, doc, serverTimestamp, DocumentData, updateDoc, getDoc, deleteDoc} from "firebase/firestore";
import { AchievementDoc } from "@/interfaces/achievement";
import {UserI} from "@/interfaces/user";
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
                icon:  achievementDoc.icon,
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

    async function assignAchievement(user: UserI, achievement: AchievementDoc) : Promise<any> {
        try {
            const userRef = doc(firestoreDB, "users", user.id);

            await updateDoc(userRef, {
                achievements: user?.achievements ? [...user?.achievements, achievement] : [achievement]
            })

        } catch (e) {

        }
    }

    return { publishAchievement, updateAchievement, getAchievements, getAchievement, deleteAchievement, assignAchievement }
})
import { defineStore } from "pinia";
import { firestoreDB, trainingsRef } from "@/firebase";
import { addDoc, collection, getDocs, onSnapshot, doc, serverTimestamp, DocumentData, updateDoc, getDoc, deleteDoc} from "firebase/firestore";
import { EventDoc } from "@/interfaces/event";
import { ComputedRef, computed } from "vue";
import { TrainingDoc } from "@/interfaces/training";
import {useCollection} from "vuefire";
import {PlanningDoc} from "@/interfaces/plannings";
export const usePlanningStore = defineStore('plannings', () => {

    async function getPlanning(id: string) {
        try {
            const docData = await getDoc(doc(firestoreDB, "plannings", id));
            return docData.data();
        } catch (error) {

        }
    }

    async function getPlannings() {
        try {
            const querySnapshot = await getDocs(collection(firestoreDB, "plannings"));
            querySnapshot.forEach((doc: any) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {

        }
    }

    async function publishPlanning(planningDoc: PlanningDoc): Promise<any> {
        try {
            const docRef = await addDoc(collection(firestoreDB, "plannings"), {
                title: planningDoc.title,
                date:  planningDoc.date,
                user_id: planningDoc.user_id,
                client_id: planningDoc.client_id,
                planning_title: planningDoc.planning_title
            });
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function updatePlanning(planningDoc: PlanningDoc): Promise<any> {
        try {
            const docRef = doc(firestoreDB, "plannings", planningDoc.id);

            await updateDoc(docRef ,{
                title: planningDoc.title,
                date: planningDoc.date,
                user_id: planningDoc.user_id,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function deletePlanning(id: string) : Promise<any> {
        try {
            const docRef = doc(firestoreDB, "plannings", id);

            await deleteDoc(docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { publishPlanning, updatePlanning, getPlannings, getPlanning, deletePlanning }
})
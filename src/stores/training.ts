import { defineStore } from "pinia";
import {firestoreDB, trainingsRef} from "@/firebase";
import { addDoc, collection, getDocs, onSnapshot, doc, serverTimestamp, DocumentData } from "firebase/firestore";
import { EventDoc } from "@/interfaces/event";
import { ComputedRef, computed } from "vue";
import {TrainingDoc} from "@/interfaces/training";
export const useTrainingStore = defineStore('trainings', () => {

    const sortedTrainings: ComputedRef<DocumentData> = computed(() => {
        return trainingsRef.value.sort(function (a, b) {
            return b.created_at.seconds - a.created_at.seconds;
        })
    });

    async function getEvents() {
        try {
            const querySnapshot = await getDocs(collection(firestoreDB, "trainings"));
            querySnapshot.forEach((doc: any) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {

        }
    }

    function watchTrainingChanges() {
        try {
            const unsub = onSnapshot(doc(firestoreDB, "trainings"), (doc) => {
                console.log("Current data: ", doc.data());
            });
            console.log(unsub)
        } catch (error) {

        }
    }

    async function publishTraining(trainingDoc: TrainingDoc): Promise<any> {
        try {
            console.log('publishEvent')
            const docRef = await addDoc(collection(firestoreDB, "trainings"), {
                title: trainingDoc.title,
                description: trainingDoc.description,
                type: trainingDoc.type,
                created_at: serverTimestamp()
            });
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { publishTraining, getEvents, watchTrainingChanges, sortedTrainings }
})
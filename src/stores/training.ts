import { defineStore } from "pinia";
import { firestoreDB, trainingsRef } from "@/firebase";
import { addDoc, collection, getDocs, onSnapshot, doc, serverTimestamp, DocumentData, updateDoc, getDoc, deleteDoc} from "firebase/firestore";
import { EventDoc } from "@/interfaces/event";
import { ComputedRef, computed } from "vue";
import { TrainingDoc } from "@/interfaces/training";
import {useCollection} from "vuefire";
export const useTrainingStore = defineStore('trainings', () => {

    const sortedTrainings: ComputedRef<DocumentData> = computed(() => {
        return trainingsRef.value.sort(function (a, b) {
            return b.start_at.seconds - a.end_at.seconds;
        })
    });

    async function registerToTraining(status: boolean, id: string) {
        try {
            const docRef = doc(firestoreDB, "trainings", id);

            await updateDoc(docRef ,{
                registered: status,
            });

        } catch (e) {
            console.log(e)
        }
    }

    async function getTraining(id: string) {
        try {
            const docData = await getDoc(doc(firestoreDB, "trainings", id));
            return docData.data();
        } catch (error) {

        }
    }

    async function getTrainings() {
        try {
            const trainings = useCollection(collection(firestoreDB, 'trainings'))

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
            const docRef = await addDoc(collection(firestoreDB, "trainings"), {
                title: trainingDoc.title,
                description: trainingDoc.description,
                start_at:  trainingDoc.start_at,
                end_at: trainingDoc.end_at,
                registered: false,
            });
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function updateTraining(trainingDoc: TrainingDoc): Promise<any> {
        try {
            const docRef = doc(firestoreDB, "trainings", trainingDoc.id);

            await updateDoc(docRef ,{
                title: trainingDoc.title,
                description: trainingDoc.description,
                start_at:  trainingDoc.start_at,
                end_at: trainingDoc.end_at,
                registered: false,
            });
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    async function deleteTraining(id: string) : Promise<any> {
        try {
            const docRef = doc(firestoreDB, "trainings", id);

            await deleteDoc(docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { publishTraining, updateTraining, getTrainings, getTraining, watchTrainingChanges, sortedTrainings, registerToTraining, deleteTraining }
})
import { defineStore } from "pinia";
import { firestoreDB } from "@/firebase";
import { addDoc, collection, getDocs, onSnapshot, doc } from "firebase/firestore";
import { EventDoc } from "@/interfaces/event";

export const useEventStore = defineStore('events', () => {

    async function getEvents() {
        try {
            const querySnapshot = await getDocs(collection(firestoreDB, "events"));
            querySnapshot.forEach((doc: any) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {

        }
    }

    function watchEventChanges() {
        try {
            const unsub = onSnapshot(doc(firestoreDB, "events"), (doc) => {
                console.log("Current data: ", doc.data());
            });
            console.log(unsub)
        } catch (error) {

        }
    }

    async function publishEvent(eventDoc: EventDoc): Promise<any> {
        try {
            console.log('publishEvent')
            const docRef = await addDoc(collection(firestoreDB, "events"), {
                title: eventDoc.title,
                description: eventDoc.description,
                type: eventDoc.type
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { publishEvent, getEvents, watchEventChanges }
})
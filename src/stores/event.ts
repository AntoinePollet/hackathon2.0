import { defineStore } from "pinia";
import { db } from "@/firebase";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { EventDoc } from "@/interfaces/event";

export const useEventStore = defineStore('events', () => {

    async function getEvents() {
        try {
            const querySnapshot = await getDocs(collection(db, "events",));
            querySnapshot.forEach((doc: any) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data());
            });
        } catch (error) {

        }
    }

    async function publishEvent(eventDoc: EventDoc) {
        try {
            const docRef = await addDoc(collection(db, "events"), {
                title: eventDoc.title,
                description: eventDoc.description,
                type: eventDoc.type
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    return { publishEvent, getEvents }
})
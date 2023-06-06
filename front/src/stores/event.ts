import { defineStore } from "pinia";
import { db } from "@/firebase";
import { addDoc, collection } from "firebase/firestore";
import { EventDoc } from "@/interfaces/event";

export const useEventStore = defineStore('events', () => {
    async function getEvents() {
        try {

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
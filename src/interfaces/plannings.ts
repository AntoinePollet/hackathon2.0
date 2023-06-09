import { Timestamp } from "firebase/firestore"

export interface PlanningDoc {
    id: string
    title: string
    date: Date
    user_id: string
}
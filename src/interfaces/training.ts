import { Timestamp } from "firebase/firestore"

export interface TrainingDoc {
    id: string
    title: string
    description: string
    start_at: Date
    end_at: Date
    registered: boolean
}
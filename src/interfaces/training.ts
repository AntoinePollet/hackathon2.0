import { Timestamp } from "firebase/firestore"

export interface TrainingDoc {
    id: string
    title: string
    description: string
    type: string
    start_at: Timestamp
    end_at: Timestamp
}
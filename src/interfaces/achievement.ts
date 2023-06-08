import { Timestamp } from "firebase/firestore"

export interface AchievementDoc {
    id: string
    title: string
    description: string
    icon: Date
}
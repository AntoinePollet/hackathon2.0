import { Timestamp } from "firebase/firestore"
import {UserI} from "@/interfaces/user";

export interface EventDoc {
    id: string
    title: string
    description: string
    type: string
    like: string[]
    created_at: Timestamp
}

export const EventTypeEnum = {
    END_OF_MISSION: "noto:dragon-face",
    START_OF_MISSION: "noto-v1:dragon",
    WELCOME: "twemoji:open-hands",
    SKILL_UNLOCKED: "fluent-emoji:dragon-face",
    SKILL_UPGRADE: "emojione-v1:dragon-face",
    PROFILE_UPDATE: "emojione-v1:dragon"
}
import { SkillsI } from "./skills"
import {AchievementDoc} from "@/interfaces/achievement";

export interface UserI {
    id: string
    email: string
    firstname: string
    lastname: string
    role: string
    isAvailable: boolean
    hiredate: string
    birthdate: string
    skills: SkillsI[]
    achievements: AchievementDoc[]
}

export interface UpdateUser {
    id: string
    firstname?: string
    lastname?: string
}
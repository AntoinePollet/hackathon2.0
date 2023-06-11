import { StoreActions } from "pinia"
import { SkillsI } from "./skills"
import {AchievementDoc} from "@/interfaces/achievement";
import {TrainingDoc} from "@/interfaces/training";

export interface TrainingI {
    title: string
    completed: boolean
}

export interface JobI {
    title: string
    compagny: string
    start_time: string
    end_time: string
}

export interface UserI {
    id: string
    uuid: string
    email: string
    firstname: string
    lastname: string
    role: string
    isAvailable: boolean
    hiredate: string
    birthdate: string
    skills: SkillsI[]
    biography: string
    position: string
    training: TrainingI[]
    jobs: JobI[]
    achievements: AchievementDoc[]
    trainings: TrainingDoc[]
}

export interface UpdateUser {
    id: string
    firstname?: string
    lastname?: string
}
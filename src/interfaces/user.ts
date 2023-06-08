import { SkillsI } from "./skills"

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
}

export interface UpdateUser {
    id: string
    firstname?: string
    lastname?: string
}
export interface EventDoc {
    title: string
    description: string
    type: string
}

export const EventTypeEnum = {
    END_OF_MISSION: "Fin de mission",
    START_OF_MISSION: "Début de mission",
    WELCOME: "Bienvenue",
    SKILL_UNLOCKED: "Nouvelle compétence débloqué"
}
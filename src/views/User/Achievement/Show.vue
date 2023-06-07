<template>
    <div class="container mx-auto">
        <v-app>
            <v-main>
                <div class="py-8">
                <h1 class="text-3xl font-bold text-center mb-8">Évaluation des compétences du développeur</h1>
                <v-container>
                    <div v-for="skill in commonSkills">
                        <h2 class="text-2xl font-bold mb-4">{{ skill.skill }}</h2>

                        <v-card class="mb-4" v-for="question in skill.questions">
                            <v-card-text class="bg-white">
                                <h3 class="text-xl font-bold mb-2">{{ question }}</h3>
                                <v-row align="center">
                                <v-col cols="10">
                                    <v-slider v-model="question.rating" min="1" max="4" step="1"></v-slider>
                                </v-col>
                                <v-col cols="2" class="text-center">
                                    <span class="font-bold">1/{{ skill.maxRating }}</span>
                                </v-col>
                                </v-row>
                            </v-card-text>
                        </v-card>
                    </div>

                    <v-btn color="primary" @click="submitForm">Soumettre</v-btn>
                    <v-btn color="primary" @click="importUsers">Importe utilisateurs</v-btn>
                </v-container>
                </div>
            </v-main>
        </v-app>
    </div>
</template>
  
<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { CollectionReference, DocumentData, collection, getDocs, addDoc } from "firebase/firestore";
import { firestoreDB } from "@/firebase";

let consultant: any = ref(null);
let commonSkills: any = ref([]);

onMounted(async () => {
    try {
        const usersFromFB = await getDocs(collection(firestoreDB, "users"));
        const commonSkillsFromFB = await getDocs(collection(firestoreDB, "commonSkills"));

        usersFromFB.forEach((doc) => {
            const data = doc.data();
            if (data.lastname === "consultant") {
                consultant.value = data;
                console.log(consultant.value);
            }
        });

        commonSkillsFromFB.forEach((doc) => {
            const data = doc.data();
            commonSkills.value.push(data);
        });
        
    } catch (error) {
        console.log(error);
    }
});

const importUsers = async () => {
    console.log('Import en cours...');
    
      const usersData = [
        {
            firstname: 'manager',
            lastname: 'manager',
            birthdate: '1 Janvier 1990',
            hiredate: '8 Mars 2021',
            role: 'manager',
            uuid: '5OmuNBhVwgTbQQp6cUs50sLq42R2',
            skills: [
                {
                    "name": "Capacité du développeur à résoudre des problèmes algorithmiques complexes",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Optimiser les algorithmes existants pour améliorer les performances",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Volonté et capacité du développeur à rester à jour sur les nouvelles technologies",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Bonne pratique de développement",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Développer en permanence ses compétences",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Travail d'équipe",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Partage des idées",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Donner et recevoir des feedbacks de manière constructive",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Communiquer clairement avec des membres non techniques de l'organisation",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Capacité à comprendre et élaborer une architecture technique robuste",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {

                    "name": "Le choix du language importe peu",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Faciliter à s'adapter sur un nouveau projet",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Clean code",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Efficacité",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Capacité à gérer les priorités",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Estimer les délais",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Communiquer efficacement sur l'avancement du projet",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Capacité à écrire des tests unitaires",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Effectuer des tests d'intégration",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Déboguer efficacement les problèmes pour assurer la qualité du code",
                    "category": "Tests et débogage",
                    "rating": 1
                }
            ]
        },
        {
            firstname: 'cto',
            lastname: 'cto',
            birthdate: '1 Janvier 1990',
            hiredate: '8 Mars 2021',
            role: 'cto',
            uuid: 'NlfnmAbD6oO9cTToFzt7zPuf4MY2',
            skills: [
                {
                    "name": "Capacité du développeur à résoudre des problèmes algorithmiques complexes",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Optimiser les algorithmes existants pour améliorer les performances",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Volonté et capacité du développeur à rester à jour sur les nouvelles technologies",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Bonne pratique de développement",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Développer en permanence ses compétences",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Travail d'équipe",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Partage des idées",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Donner et recevoir des feedbacks de manière constructive",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Communiquer clairement avec des membres non techniques de l'organisation",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Capacité à comprendre et élaborer une architecture technique robuste",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {

                    "name": "Le choix du language importe peu",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Faciliter à s'adapter sur un nouveau projet",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Clean code",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Efficacité",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Capacité à gérer les priorités",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Estimer les délais",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Communiquer efficacement sur l'avancement du projet",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Capacité à écrire des tests unitaires",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Effectuer des tests d'intégration",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Déboguer efficacement les problèmes pour assurer la qualité du code",
                    "category": "Tests et débogage",
                    "rating": 1
                }
            ]
        },
        {
            firstname: 'admin',
            lastname: 'admin',
            birthdate: '1 Janvier 1990',
            hiredate: '8 Mars 2021',
            role: 'admin',
            uuid: 'LWsiztmrCPUbnSJZi4Qmqi43xc03',
            skills: [
                {
                    "name": "Capacité du développeur à résoudre des problèmes algorithmiques complexes",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Optimiser les algorithmes existants pour améliorer les performances",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Volonté et capacité du développeur à rester à jour sur les nouvelles technologies",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Bonne pratique de développement",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Développer en permanence ses compétences",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Travail d'équipe",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Partage des idées",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Donner et recevoir des feedbacks de manière constructive",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Communiquer clairement avec des membres non techniques de l'organisation",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Capacité à comprendre et élaborer une architecture technique robuste",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {

                    "name": "Le choix du language importe peu",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Faciliter à s'adapter sur un nouveau projet",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Clean code",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Efficacité",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Capacité à gérer les priorités",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Estimer les délais",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Communiquer efficacement sur l'avancement du projet",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Capacité à écrire des tests unitaires",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Effectuer des tests d'intégration",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Déboguer efficacement les problèmes pour assurer la qualité du code",
                    "category": "Tests et débogage",
                    "rating": 1
                }
            ]
        },
        {
            firstname: 'consultant',
            lastname: 'consultant',
            birthdate: '1 Janvier 1990',
            hiredate: '8 Mars 2021',
            role: 'consultant',
            uuid: '669Jkhq6LRTa3rFq8rFhEsHfGqr2',
            skills: [
                {
                    "name": "Capacité du développeur à résoudre des problèmes algorithmiques complexes",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Optimiser les algorithmes existants pour améliorer les performances",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Volonté et capacité du développeur à rester à jour sur les nouvelles technologies",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Bonne pratique de développement",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Développer en permanence ses compétences",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Travail d'équipe",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Partage des idées",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Donner et recevoir des feedbacks de manière constructive",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Communiquer clairement avec des membres non techniques de l'organisation",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Capacité à comprendre et élaborer une architecture technique robuste",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {

                    "name": "Le choix du language importe peu",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Faciliter à s'adapter sur un nouveau projet",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Clean code",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Efficacité",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Capacité à gérer les priorités",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Estimer les délais",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Communiquer efficacement sur l'avancement du projet",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Capacité à écrire des tests unitaires",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Effectuer des tests d'intégration",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Déboguer efficacement les problèmes pour assurer la qualité du code",
                    "category": "Tests et débogage",
                    "rating": 1
                }
            ]
        },
        {
            firstname: 'recruteur',
            lastname: 'recruteur',
            birthdate: '1 Janvier 1990',
            hiredate: '8 Mars 2021',
            role: 'recruteur',
            uuid: 'tMrl4FsMAxeCi1tDEwCULxsA3K22',
            skills: [
                {
                    "name": "Capacité du développeur à résoudre des problèmes algorithmiques complexes",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Optimiser les algorithmes existants pour améliorer les performances",
                    "category": "Résolution de problèmes algorithmiques",
                    "rating": 1
                },
                {
                    "name": "Volonté et capacité du développeur à rester à jour sur les nouvelles technologies",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Bonne pratique de développement",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Développer en permanence ses compétences",
                    "category": "Apprentissage continu",
                    "rating": 1
                },
                {
                    "name": "Travail d'équipe",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Partage des idées",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Donner et recevoir des feedbacks de manière constructive",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Communiquer clairement avec des membres non techniques de l'organisation",
                    "category": "Collaboration et communication",
                    "rating": 1
                },
                {
                    "name": "Capacité à comprendre et élaborer une architecture technique robuste",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {

                    "name": "Le choix du language importe peu",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Faciliter à s'adapter sur un nouveau projet",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Clean code",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Efficacité",
                    "category": "Compétences techniques",
                    "rating": 1
                },
                {
                    "name": "Capacité à gérer les priorités",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Estimer les délais",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Communiquer efficacement sur l'avancement du projet",
                    "category": "Gestion de projet",
                    "rating": 1
                },
                {
                    "name": "Capacité à écrire des tests unitaires",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Effectuer des tests d'intégration",
                    "category": "Tests et débogage",
                    "rating": 1
                },
                {
                    "name": "Déboguer efficacement les problèmes pour assurer la qualité du code",
                    "category": "Tests et débogage",
                    "rating": 1
                }
            ]
        }
      ];

      const usersCollectionRef = collection(firestoreDB, 'users');
      for (const userData of usersData) {
        await addDoc(usersCollectionRef, userData);
      }
      console.log('Import terminé !');
}
</script>
  
<style>
/* Styles spécifiques à cette page, si nécessaire */
</style>

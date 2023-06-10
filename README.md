# Cloud functions

For write and deploy new cloud functions, go to /server-side/functions
then edit index.js

usefull commands

`npm run deploy` => deploy functions

`npm run deploy:debug` => deploy functions but with option debug

`npm run serve` => run firebase emulators to http://127.0.0.1:4000/ for testing and checking functions before deploy

see [this doc](https://firebase.google.com/docs/functions/get-started?hl=fr&authuser=1&_gl=1*ewsy1k*_ga*MjExODU1MjYyMS4xNjg2MDU0OTE4*_ga_CW55HF8NVT*MTY4NjEyNTM1MC43LjEuMTY4NjEyNTkwNy4wLjAuMA..&gen=2nd#emulate-execution-of-your-functions) to see how to use serve

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

-   [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.


Listing des fonctionnalités avec les auteurs de celle-ci
Nom et pseudo de chaque développeur
Procédure d’installation et de lancement de votre solution


## Développeur 

Nils MILLOT
Antoine LIN
Michael DE MADET
Antoine POLLET

## Fonctionnalités

- Flux d’actualité -> Antoine Pollet
- Partage de fiche consultant pour client final -> Nils Millot
- Succès déblocables -> Antoine Lin?
- Formations -> Antoine Lin
- Evaluation personnelle -> Michael De Madet
- Un manager peut donner une note à son consultant -> Michael de madet
- Compétences (skills) -> Antoine Lin et Michael?
- Planning -> Antoine Lin
- Gestion des utilisateurs en fonction des rôles -> Antoine pollet et Nils Millot
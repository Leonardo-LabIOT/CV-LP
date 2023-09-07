import { defineStore } from "pinia";
let _portifolio = "my-portifolio.web.app";

export const useDataStore = defineStore("app", {
  state: () => ({
    portifolio: _portifolio,
    contacts: [
      {
        type: "email",
        name: "email",
        value: "my-email-32-letter@my-domain.com",
      },
      { type: "page-text", name: "github", value: "github/my-domain.com" },
      { type: "page-text", name: "linkedin", value: "Linkedin/my-domain.com" },
      { type: "page-text", name: "portifolio", value: _portifolio },
      { type: "tel", name: "tel", value: "(yy) x.xxxx-xxxx" },
    ],
    stacks: [
      { index: 0, name: "Vue.js", mastery: 7 },
      { index: 1, name: "Ionic", mastery: 5 },
      { index: 2, name: "Vuetify", mastery: 6 },
      { index: 3, name: "HTML/CSS", mastery: 9 },
      { index: 4, name: "TypeScript", mastery: 5 },
      { index: 5, name: "JavaScript", mastery: 8 },
      { index: 6, name: "Firebase", mastery: 4 },
      { index: 7, name: "Nuxt.js", mastery: 3 },
      { index: 8, name: "SASS/SCSS", mastery: 8 },
      { index: 9, name: "Node.js", mastery: 5 },
      { index: 10, name: "React.js", mastery: 3 },
      { index: 11, name: "Next.js", mastery: 2 },
      { index: 12, name: "Express.js", mastery: 1 },
      { index: 13, name: "Nest.js", mastery: 1 },
      { index: 14, name: "Tailwind", mastery: 3 },
      { index: 15, name: "Laravel", mastery: 2 },
      { index: 16, name: "PHP", mastery: 3 },
      { index: 17, name: "MariaDB", mastery: 1 },
    ],
    cursos: [
      {
        name: "Complete Vue.js 3 - Udemy : OnlyKiosk Tech",
        year: 2023,
        description:
          "Curso Completo de Vue3: Vue-Router, Composition API, Vite, Tailwind e Pinia.",
        full_description: "",
        link: "",
      },
      {
        name: "Vue.js 2 - Udemy : Cod3r",
        year: 2023,
        description:
          "Curso de Vue2: VueX, Axios, Ajax, Options API, Vuetify, Tailwind, MPA e SPA.",
        full_description: "",
        link: "",
      },
      {
        name: "Fullstack jr - Udemy : Aylton Inacio",
        year: 2022,
        description:
          "Desenvolvimento Web: HTML, CSS, JavaScript, AJAX, JSON, Bootstrap, WordPress, PHP e MySQL.",
        full_description: "",
        link: "",
      },
      {
        name: "Next e React.js - Udemy : Cod3r",
        year: 2023,
        description: "Next.js: React.js, TailwindCSS, Typescript e Firebase.",
        full_description: "",
        link: "",
      },
      {
        name: "Vue3 - Composition API - Udemy : Danny Connell",
        year: 2023,
        description:
          "Vue.js: Vue3, Composition API, Pinia, Typescript e Firebase9.",
        full_description: "",
        link: "",
      },
      {
        name: "Ionic 5 - Ionic&Laravel - Udemy : Bruno Ferreira",
        year: 2023,
        description: "Ionic: Angular, MySQL, Laravel, PHP.",
        full_description: "",
        link: "",
      },
    ],
  }),
});

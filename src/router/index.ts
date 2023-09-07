import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Page",
    component: () => import("@/views/Home.vue"),
    redirect: { name: "CV1" },
    children: [
      {
        path: "",
        name: "Nav",
        component: () => import("@/layouts/Nav.vue"),
        redirect: { name: "CV1" },
      },
      {
        path: "cv1",
        name: "CV1",
        component: () => import("@/layouts/CV1.vue"),
      },
      {
        path: "cv2",
        name: "CV2",
        component: () => import("@/layouts/CV2.vue"),
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("@/views/NotFound.vue"),
    children: [
      { path: "", name: "404", component: () => import("@/layouts/404.vue") },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

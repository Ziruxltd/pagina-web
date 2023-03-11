const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "/", component: () => import("src/pages/homeView.vue") },
      { path: "/home", component: () => import("src/pages/homeView.vue") },
      {
        path: "food",
        component: () => import("src/pages/FoodMenu.vue"),
      },
      {
        path: "lista",
        component: () => import("src/pages/ListaNovios.vue"),
      },
      { path: "faq", component: () => import("src/pages/FAQ.vue") },
      { path: "savedate", component: () => import("src/pages/SaveDate.vue") },
      {
        path: "alojamientos",
        component: () => import("src/pages/HotelsView.vue"),
      },
      {
        path: "foodmadrid",
        component: () => import("src/pages/FoodMadrid.vue"),
      },
      {
        path: "foodsegovia",
        component: () => import("src/pages/FoodSegovia.vue"),
      },
      {
        path: "agenda",
        component: () => import("src/pages/AgendaView.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

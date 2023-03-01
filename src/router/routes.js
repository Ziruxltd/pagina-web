const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "home", component: () => import("src/pages/homeView.vue") },
      { path: "food", component: () => import("src/pages/FoodMenu.vue") },
      { path: "lista", component: () => import("src/pages/ListaNovios.vue") },
      { path: "faq", component: () => import("src/pages/FAQ.vue") },
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

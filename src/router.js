import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ServicePage from "./pages/ServicePage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: AboutPage,
    },
    {
      path: "/service",
      component: ServicePage,
    },
    {
      path: "/portfolio",
      component: PortfolioPage,
    },
  ],
});
export default router;

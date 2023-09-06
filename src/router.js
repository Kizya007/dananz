import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./pages/HomePage.vue";
import AboutPage from "./pages/AboutPage.vue";
import ServicePage from "./pages/ServicePage.vue";
import ContactUsPage from "./pages/ContactUsPage.vue";
import OurTeamsPage from "./pages/OurTeamsPage.vue";
import PortfolioPage from "./pages/PortfolioPage.vue";
import DetailsPortfolioPage from "./pages/DetailsPortfolioPage.vue";

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
      path: "/ourteams",
      component: OurTeamsPage,
    },
    { path: "/contactus", component: ContactUsPage },
    { path: "/portfolio", component: PortfolioPage },
    {
      path: "/detailsportfolio",
      component: DetailsPortfolioPage,
    },
  ],
});
export default router;

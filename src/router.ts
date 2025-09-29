import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from './Pages/home.vue';
import AboutView from './Pages/about.vue';
import SimracingView from './Pages/simracing.vue';
import ProjectsView from './Pages/projects.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/simracing', component: SimracingView },
  { path: '/projects', component: ProjectsView }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes
});

export default router;

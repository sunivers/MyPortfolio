import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../views/MainView.vue';
import CompanyView from '../views/CompanyView.vue';
import ToyView from '../views/ToyView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/MyPortfolio',
    },
    {
      path: '/MyPortfolio',
      name: 'main',
      component: MainView,
    },
    {
      path: '/company',
      name: 'company',
      component: CompanyView,
    },
    {
      path: '/toy',
      name: 'toy',
      component: ToyView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
});

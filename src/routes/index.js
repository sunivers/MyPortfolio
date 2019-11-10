import Vue from 'vue';
import VueRouter from 'vue-router';
import CompanyView from '../views/CompanyView.vue';
import PersonalView from '../views/PersonalView.vue';
import AboutView from '../views/AboutView.vue';
import ContactView from '../views/ContactView.vue';

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/company',
      name: 'company',
      component: CompanyView,
    },
    {
      path: '/personal',
      name: 'personal',
      component: PersonalView,
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

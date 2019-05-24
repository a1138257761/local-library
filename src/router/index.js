import Vue from "vue";
import Router from "vue-router";
import Welcome from '../views/Welcome.vue';
import HomeRouter from './Home/Home';
import Home from '../views/Home.vue';
import Person from '../views/Account/Person';
import Search from '../views/Search.vue';
import DetailsRouter from './Details';

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect: '/Home/BookShelf'
    },
    {
      path: '/Welcome',
      name: 'Welcome',
      component: Welcome,
    },
    {
      path: '/Search/:id',
      name: 'Search',
      component: Search,
    },
    {
      path: '/Person',
      name: 'Person',
      component: Person,
    },
    HomeRouter,
    DetailsRouter,
  ]
});

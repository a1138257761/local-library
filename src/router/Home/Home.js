const Home = () => import(/* webpackChunkName: "Home" */ "../../views/Home.vue")
const HomePage = () => import(/* webpackChunkName: "Home" */ "../../views/HomePage/HomePage.vue")
const BookShelf = () => import(/* webpackChunkName: "Home" */ "../../views/BookShelf/BookShelf.vue")

export default {
  path: "/Home",
  name: "Home",
  component: Home,
  redirect: { name: "BookShelf" },
  children: [
    {
      path: 'HomePage',
      name: "HomePage",
      component: HomePage,
    },
    {
    path: 'BookShelf',
    name: "BookShelf",
    component: BookShelf,
    },
  ],
}

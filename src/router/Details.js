const Details = () => import("../views/Details/Details.vue");
const BookInformation = () => import('../views/Details/BookInformation/BookInformation.vue');
const BookChapter = () => import('../views/Details/BookChapter/BookChapter.vue');

export default {
  path: "/Details",
  name: "Details",
  component: Details,
  children: [
    {
      path: 'BookInformation/:id',
      name: 'BookInformation',
      component: BookInformation,
    },
    {
      path: 'Chapter/:id',
      name: 'BookChapter',
      component: BookChapter,
    },
  ],
}
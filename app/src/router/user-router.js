import Login from "../components/login.vue"
import Registration from "../components/registration.vue"

const routes = [
  {
    path: '/register',
    name: 'Registration',
    component: Registration,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  // {
  //   path: '*',
  //   redirect: '/login', // Перенаправление на страницу логина по умолчанию
  // },
];

export default routes
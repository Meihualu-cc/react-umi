// umi routes: https://umijs.org/docs/routing

import { IRoute } from 'umi';

const Route: Array<IRoute> = [
  {
    layout: false,
    path: '/login',
    component: './login'
  },
  {
    path: '/',
    redirect: '/home'
  },
  {
    name: 'home',
    path: '/home',
    component: './home'
  }
];

export default Route;

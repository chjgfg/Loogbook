import {createRouter, createWebHashHistory} from "vue-router"
// @ts-ignore
import admin from './admin.js'

// @ts-ignore
const routes = [
  {
    path: '',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../components/ordinary/dashboard.vue'),
    children: [
      {
        path: '',
        redirect: '/mains'
      },
      {
        alias: '/mains',
        path: '/main',
        name: 'main',
        component: () => import('../components/ordinary/main/main.vue'),
      },
      {
        path: '/book_info',
        name: 'book_info',
        component: () => import('../components/ordinary/book/book_info.vue'),
      },
      {
        path: '/chapter_info',
        name: 'chapter_info',
        component: () => import('../components/ordinary/book/chapter_info.vue'),
      }
    ]
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import('../components/ordinary/mine/mine.vue'),
    children: [
      {
        path: '/security',
        name: 'security',
        component: () => import('../components/ordinary/mine/mine_info/security.vue'),
      },
      {
        path: '/person_info',
        name: 'person_info',
        component: () => import('../components/ordinary/mine/mine_info/person_info.vue'),
      },
      {
        path: '/trade_info',
        name: 'trade_info',
        component: () => import('../components/ordinary/mine/mine_info/trade_info.vue'),
      },
      {
        path: '/adder_info',
        name: 'adder_info',
        component: () => import('../components/ordinary/mine/mine_info/adder_info.vue'),
      },
    ]
  },
  {
    path: '/friends',
    name: 'friends',
    component: () => import('../components/ordinary/mine/firends.vue'),
    children: [
      {
        path: '/recent',
        name: 'recent',
        component: () => import('../components/ordinary/mine/friends/recent.vue'),
      },
      {
        path: '/friends_list',
        name: 'friends_list',
        component: () => import('../components/ordinary/mine/friends/friends_list.vue'),
      },
      {
        path: '/group_list',
        name: 'group_list',
        component: () => import('../components/ordinary/mine/friends/group_list.vue'),

      },
    ]
  },

  {
    path: '/mine_book',
    name: 'mine_book',
    component: () => import('../components/ordinary/mine/mine_book.vue'),
    children: [
      {
        path: '/bookshelf',
        name: 'bookshelf',
        component: () => import('../components/ordinary/mine/bookshelf/bookshelf.vue'),

      },
      {
        path: '/history',
        name: 'history',
        component: () => import('../components/ordinary/mine/bookshelf/history.vue'),
      },
    ]
  },

  {
    path: '/setting',
    name: 'setting',
    component: () => import('../components/ordinary/mine/setting.vue'),
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('../components/ordinary/mine/login/login.vue'),
  },

  {
    path: '/register',
    name: 'register',
    component: () => import('../components/ordinary/mine/login/register.vue'),
  },
  ...admin


];


const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
});

// router.beforeEach((to, from, next) => {
//   if (!localStorage.getItem('user')) {
//     console.log(to.name);
//     if (to.name === "admin_login") {
//       next();
//     } else {
//       router.push('admin_login')
//     }
//   } else {
//     next();
//   }
// });

export default router;

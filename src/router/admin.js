import router from "./index";
// @ts-ignore
const admin = [
  {
    path: '/admin_login',
    name: 'admin_login',
    component: () => import('../components/admin/admin_login.vue'),
  },
  {
    path: '/admin_dashboard',
    name: 'admin_dashboard',
    component: () => import('../components/admin/admin_dashboard.vue'),
    // beforeEnter: (to, from, next) => {
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
    // },
    children: [
      {
        path: '/admin_categorys',
        name: 'admin_categorys',
        component: () => import('../components/admin/admin_book/admin_categorys.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_books',
        name: 'admin_books',
        component: () => import('../components/admin/admin_book/admin_books.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_book_info',
        name: 'admin_book_info',
        component: () => import('../components/admin/admin_book/admin_book_info.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_chapter_info',
        name: 'admin_chapter_info',
        component: () => import('../components/admin/admin_book/admin_chapter_info.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_user',
        name: 'admin_user',
        component: () => import('../components/admin/admin_user/admin_user.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },

      {
        path: '/admin_role',
        name: 'admin_role',
        component: () => import('../components/admin/admin_user/admin_role.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_log',
        name: 'admin_log',
        component: () => import('../components/admin/admin_log.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_friends',
        name: 'admin_friends',
        component: () => import('../components/admin/admin_friend/admin_friends.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_comments',
        name: 'admin_comments',
        component: () => import('../components/admin/admin_user/admin_comments.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_group',
        name: 'admin_group',
        component: () => import('../components/admin/admin_friend/admin_group.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_ship',
        name: 'admin_ship',
        component: () => import('../components/admin/admin_book/admin_ship.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_purchase',
        name: 'admin_purchase',
        component: () => import('../components/admin/admin_book/admin_purchase.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
      {
        path: '/admin_tags',
        name: 'admin_tags',
        component: () => import('../components/admin/admin_book/admin_tags.vue'),
        // meta: {
        //   keepAlive: true
        // }
      },
    ]
  },
];

export default admin

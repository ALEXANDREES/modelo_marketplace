
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '',
        name: 'landingPage',
        component: () => import('src/pages/landingPage')
      }
    ]
  },
  // ------------------------ LAYOUT DASHBOARD ------------------------
  {
    path: '/',
    component: () => import('layouts/LayoutDash.vue'),
    children: [
      { path: '/dashboardAdmin',
        name: 'dashboardAdmin',
        component: () => import('src/pages/access/Admin/dashboardAdmin')
      },
      { path: 'perfil',
        name: 'perfil',
        component: () => import('src/pages/access/Admin/profile')
      },
      { path: '/produtos',
        name: 'produtos',
        component: () => import('src/pages/access/Admin/products')
      },
      { path: '/pedidos',
        name: 'pedidos',
        component: () => import('src/pages/access/Admin/requests')
      },
      { path: '/configuracao',
        name: 'configuracao',
        component: () => import('src/pages/access/Admin/settings')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

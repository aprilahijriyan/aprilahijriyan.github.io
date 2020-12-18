
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Experience.vue'),
    children: [
      { path: 'experience', component: () => import('pages/Experience.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Education.vue'),
    children: [
      { path: 'education', component: () => import('pages/Education.vue') },
    ]
  },
  {
    path: '/',
    component: () => import('layouts/Contact.vue'),
    children: [
      { path: 'contact', component: () => import('pages/Contact.vue') },
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes

import { createRouter, createWebHistory } from 'vue-router'

// PersonalCenter views
const PersonalCenterLayout = () => import('../components/PersonalCenter/publish.vue')
const TabCourses = () => import('../components/PersonalCenter/nav-tabs/Courses.vue')
const TabCoursesPublished = () => import('../components/PersonalCenter/nav-tabs/CoursesPublished.vue')
const TabCoursesPurchased = () => import('../components/PersonalCenter/nav-tabs/CoursesPurchased.vue')
const TabShared = () => import('../components/PersonalCenter/nav-tabs/Shared.vue')
const TabProducts = () => import('../components/PersonalCenter/nav-tabs/Products.vue')
const TabWallet = () => import('../components/PersonalCenter/nav-tabs/Wallet.vue')
const TabCredit = () => import('../components/PersonalCenter/nav-tabs/Credit.vue')
const TabFavorites = () => import('../components/PersonalCenter/nav-tabs/Favorites.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/PersonalCenter',
      name: 'PersonalCenter',
      component: PersonalCenterLayout,
      redirect: '/PersonalCenter/courses',
      children: [
        {
          path: 'courses',
          name: 'courses',
          component: TabCourses,
          redirect: '/PersonalCenter/courses/published',
          children: [
            { path: 'published', name: 'courses-published', component: TabCoursesPublished },
            { path: 'purchased', name: 'courses-purchased', component: TabCoursesPurchased },
          ]
        },
        { path: 'shared', name: 'shared', component: TabShared },
        { path: 'products', name: 'products', component: TabProducts },
        { path: 'wallet', name: 'wallet', component: TabWallet },
        { path: 'credit', name: 'credit', component: TabCredit },
        { path: 'favorites', name: 'favorites', component: TabFavorites }
      ]
    },
    { path: '/', redirect: '/PersonalCenter/courses' }
  ],
})

export default router

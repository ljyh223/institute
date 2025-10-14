import { createRouter, createWebHistory } from 'vue-router'

// PersonalCenter views
const PersonalCenterLayout = () => import('../components/PersonalCenter/publish.vue')
const TabCourses = () => import('../components/PersonalCenter/nav-tabs/Courses.vue')
const TabCoursesPublished = () => import('../components/PersonalCenter/nav-tabs/CoursesPublished.vue')
const TabCoursesPurchased = () => import('../components/PersonalCenter/nav-tabs/CoursesPurchased.vue')
const TabShared = () => import('../components/PersonalCenter/nav-tabs/Shared.vue')
const TabProducts = () => import('../components/PersonalCenter/nav-tabs/Products.vue')
const TabWallet = () => import('../components/PersonalCenter/nav-tabs/Wallet.vue')
const WalletAll = () => import('../components/PersonalCenter/nav-tabs/wallet/All.vue')
const WalletIncome = () => import('../components/PersonalCenter/nav-tabs/wallet/Income.vue')
const WalletExpense = () => import('../components/PersonalCenter/nav-tabs/wallet/Expense.vue')
const TabCredit = () => import('../components/PersonalCenter/nav-tabs/Credit.vue')
const CreditDetails = () => import('../components/PersonalCenter/nav-tabs/credit/Details.vue')
const CreditTasks = () => import('../components/PersonalCenter/nav-tabs/credit/Tasks.vue')
const TabFavorites = () => import('../components/PersonalCenter/nav-tabs/Favorites.vue')
const FavoritesFollowings = () => import('../components/PersonalCenter/nav-tabs/favorites/Followings.vue')
const FavoritesFollowers = () => import('../components/PersonalCenter/nav-tabs/favorites/Followers.vue')
const FavoritesCollections = () => import('../components/PersonalCenter/nav-tabs/favorites/Collections.vue')

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
        {
          path: 'wallet',
          name: 'wallet',
          component: TabWallet,
          redirect: '/PersonalCenter/wallet/all',
          children: [
            { path: 'all', name: 'wallet-all', component: WalletAll },
            { path: 'income', name: 'wallet-income', component: WalletIncome },
            { path: 'expense', name: 'wallet-expense', component: WalletExpense }
          ]
        },
        {
          path: 'credit',
          name: 'credit',
          component: TabCredit,
          redirect: '/PersonalCenter/credit/details',
          children: [
            { path: 'details', name: 'credit-details', component: CreditDetails },
            { path: 'tasks', name: 'credit-tasks', component: CreditTasks }
          ]
        },
        {
          path: 'favorites',
          name: 'favorites',
          component: TabFavorites,
          redirect: '/PersonalCenter/favorites/followings',
          children: [
            { path: 'followings', name: 'favorites-followings', component: FavoritesFollowings },
            { path: 'followers', name: 'favorites-followers', component: FavoritesFollowers },
            { path: 'collections', name: 'favorites-collections', component: FavoritesCollections },
          ]
        }
      ]
    },
    { path: '/', redirect: '/PersonalCenter/courses' }
  ],
})

export default router

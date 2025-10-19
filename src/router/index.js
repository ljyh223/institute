import { createRouter, createWebHistory } from 'vue-router'

// 说明：这里统一使用相对 `src/router/index.js` 的相对路径。
// Home 与 课程详情页
const HomePage = () => import('../views/PersonlHomePage.vue')
const CourseDetail = () => import('../views/PersonalcenterCourse.vue')
// 老师主页详情页（HomepageDetail1）
const TeacherHomeDetail = () => import('../components/page/homepage/Homepage2/HomepageDetail1.vue')
// 场馆/空间详情页（HomepageDetail）
const VenueDetail = () => import('../components/page/homepage/Homepage2/HomepageDetail.vue')
// 列表页（查看更多）
const TeacherListPage = () => import('../components/page/homepage/Homepage2/HomepageList.vue')
const VenueListPage = () => import('../components/page/homepage/Homepage2/HomepageList1.vue')
const CourseListPage = () => import('../components/page/homepage/Homepage2/HomepageList2.vue')

// 个人中心相关视图（注意真实路径位于 components/page/PersonalCenter/...）
const PersonalCenterLayout = () => import('../components/page/PersonalCenter/publish.vue')
const TabCourses = () => import('../components/page/PersonalCenter/nav-tabs/Courses.vue')
const TabCoursesPublished = () => import('../components/page/PersonalCenter/nav-tabs/CoursesPublished.vue')
const TabCoursesPurchased = () => import('../components/page/PersonalCenter/nav-tabs/CoursesPurchased.vue')
const TabShared = () => import('../components/page/PersonalCenter/nav-tabs/Shared.vue')
const TabProducts = () => import('../components/page/PersonalCenter/nav-tabs/Products.vue')
const TabWallet = () => import('../components/page/PersonalCenter/nav-tabs/Wallet.vue')
const WalletAll = () => import('../components/page/PersonalCenter/nav-tabs/wallet/All.vue')
const WalletIncome = () => import('../components/page/PersonalCenter/nav-tabs/wallet/Income.vue')
const WalletExpense = () => import('../components/page/PersonalCenter/nav-tabs/wallet/Expense.vue')
const TabCredit = () => import('../components/page/PersonalCenter/nav-tabs/Credit.vue')
const CreditDetails = () => import('../components/page/PersonalCenter/nav-tabs/credit/Details.vue')
const CreditTasks = () => import('../components/page/PersonalCenter/nav-tabs/credit/Tasks.vue')
const TabFavorites = () => import('../components/page/PersonalCenter/nav-tabs/Favorites.vue')
const FavoritesFollowings = () => import('../components/page/PersonalCenter/nav-tabs/favorites/Followings.vue')
const FavoritesFollowers = () => import('../components/page/PersonalCenter/nav-tabs/favorites/Followers.vue')
const FavoritesCollections = () => import('../components/page/PersonalCenter/nav-tabs/favorites/Collections.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 修复切换路由时页面停留在底部的问题：每次导航滚动到页面顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    return { left: 0, top: 0 }
  },
  routes: [
    // 首页（一级路由）
    { path: '/', name: 'home', component: HomePage },
    // 课程详情页（从 InterestClass 列表点击进入）
    { path: '/course/:id', name: 'course-detail', component: CourseDetail, props: true },
    // 老师主页（从 InterestedTeacher 卡片进入）
    { path: '/teacher/:id', name: 'teacher-home', component: TeacherHomeDetail, props: true },
    // 场馆详情（从 Venue 小卡片进入）
    { path: '/venue/:id', name: 'venue-detail', component: VenueDetail, props: true },
    // 老师列表（首页-老师区域-查看更多）
    { path: '/teachers', name: 'teacher-list', component: TeacherListPage },
    // 场馆列表（首页-场馆区域-查看更多）
    { path: '/venues', name: 'venue-list', component: VenueListPage },
    // 课程列表（首页-课程区域-查看更多）
    { path: '/courses', name: 'course-list', component: CourseListPage },
    {
      // 个人中心（保留你原有的层级结构）
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
    }
  ],
})

export default router

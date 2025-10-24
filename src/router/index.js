import { createRouter, createWebHistory } from 'vue-router'

// 说明：这里统一使用相对 `src/router/index.js` 的相对路径。
// Home 与 课程详情页
const HomePage = () => import('../views/PersonlHomePage.vue')
const CourseDetail = () => import('../views/CourseDetail.vue')
// 老师主页详情页（HomepageDetail1）
const TeacherHomeDetail = () => import('../views/TeacherDetail.vue')
// 场馆/空间详情页（HomepageDetail）
const VenueDetail = () => import('../views/VenueDetail.vue')
// 列表页（查看更多）
const TeacherListPage = () => import('../views/TeacherList.vue')
const VenueListPage = () => import('../views/VenueList.vue')
const CourseListPage = () => import('../views/CourseList.vue')

// 个人中心相关视图（注意真实路径位于 components/page/PersonalCenter/...）
const PersonalCenterLayout = () => import('../views/personalCenter/PersonalCenter.vue')
const TabCourses = () => import('../views/personalCenter/nav/CourseTab.vue')
const TabCoursesPublished = () => import('../views/personalCenter/nav/CoursesPublished.vue')
const TabCoursesPurchased = () => import('../views/personalCenter/nav/CoursesPurchased.vue')
const TabShared = () => import('../views/personalCenter/nav/Shared.vue')
const TabProducts = () => import('../views/personalCenter/nav/Products.vue')
const TabWallet = () => import('../views/personalCenter/nav/wallet/Wallet.vue')
const WalletAll = () => import('../views/personalCenter/nav/wallet/All.vue')
const WalletIncome = () => import('../views/personalCenter/nav/wallet/Income.vue')
const WalletExpense = () => import('../views/personalCenter/nav/wallet/Expense.vue')
const TabCredit = () => import('../views/personalCenter/nav/credit/Credit.vue')
const CreditDetails = () => import('../views/personalCenter/nav/credit/Details.vue')
const CreditTasks = () => import('../views/personalCenter/nav/credit/Tasks.vue')
const TabFavorites = () => import('../views/personalCenter/nav/favorites/Favorites.vue')
const FavoritesFollowings = () => import('../views/personalCenter/nav/favorites/Followings.vue')
const FavoritesFollowers = () => import('../views/personalCenter/nav/favorites/Followers.vue')
const FavoritesCollections = () => import('../views/personalCenter/nav/favorites/Collections.vue')
// 学习圈 或者说是社区
const Community = () => import('../views/community/Community.vue')
// 我的帖子
const Posts  = () => import('../views/community/Posts.vue')
// 联系场馆（界面和场馆列表几乎相同）
const ContactVenue = () => import('../views/personalCenter/ContactVenue.vue')
// 消息列表
const Messages = () => import('../views/Messages.vue')
//直播详情
const Live = () => import('../views/LiveFristpage.vue')
//直播中心
const LiveDetail = () => import('../views/LivePage.vue')

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
    },
    { path: '/community', name: 'community', component: Community },
    { path: '/community/posts', name: 'posts', component: Posts },
    { path: '/contactVenue', name: 'contactVenue', component: ContactVenue },
    { path: '/messages', name: 'messages', component: Messages },
    { path: '/live', name: 'live', component:Live },
    {  path: '/livedetail', name: 'livedetail', component: LiveDetail } 

  ],
})

export default router

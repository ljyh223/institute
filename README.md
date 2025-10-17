## Routes

Below is the current routing map for the application:

```start
/                     -> name: home -> component: `src/views/PersonlHomePage.vue`
/course/:id           -> name: course-detail -> component: `src/components/page/Personlcenter1/PersonalcenterCourse.vue`
/teacher/:id          -> name: teacher-home -> component: `src/components/page/homepage/Homepage2/HomepageDetail1.vue`
/venue/:id            -> name: venue-detail -> component: `src/components/page/homepage/Homepage2/HomepageDetail.vue`
/teachers             -> name: teacher-list -> component: `src/components/page/homepage/Homepage2/HomepageList1.vue`
/venues               -> name: venue-list -> component: `src/components/page/homepage/Homepage2/HomepageList2.vue`
/courses              -> name: course-list -> component: `src/components/page/homepage/Homepage2/HomepageList3.vue`
/PersonalCenter       -> name: PersonalCenter -> component: `src/components/page/PersonalCenter/publish.vue`
  /courses            -> name: courses -> component: `src/components/page/PersonalCenter/nav-tabs/Courses.vue`
    /published        -> name: courses-published -> component: `src/components/page/PersonalCenter/nav-tabs/CoursesPublished.vue`
    /purchased        -> name: courses-purchased -> component: `src/components/page/PersonalCenter/nav-tabs/CoursesPurchased.vue`
  /shared             -> name: shared -> component: `src/components/page/PersonalCenter/nav-tabs/Shared.vue`
  /products           -> name: products -> component: `src/components/page/PersonalCenter/nav-tabs/Products.vue`
  /wallet             -> name: wallet -> component: `src/components/page/PersonalCenter/nav-tabs/Wallet.vue`
    /all              -> name: wallet-all -> component: `src/components/page/PersonalCenter/nav-tabs/wallet/All.vue`
    /income           -> name: wallet-income -> component: `src/components/page/PersonalCenter/nav-tabs/wallet/Income.vue`
    /expense          -> name: wallet-expense -> component: `src/components/page/PersonalCenter/nav-tabs/wallet/Expense.vue`
  /credit             -> name: credit -> component: `src/components/page/PersonalCenter/nav-tabs/Credit.vue`
    /details          -> name: credit-details -> component: `src/components/page/PersonalCenter/nav-tabs/credit/Details.vue`
    /tasks            -> name: credit-tasks -> component: `src/components/page/PersonalCenter/nav-tabs/credit/Tasks.vue`
  /favorites          -> name: favorites -> component: `src/components/page/PersonalCenter/nav-tabs/Favorites.vue`
    /followings       -> name: favorites-followings -> component: `src/components/page/PersonalCenter/nav-tabs/favorites/Followings.vue`
    /followers        -> name: favorites-followers -> component: `src/components/page/PersonalCenter/nav-tabs/favorites/Followers.vue`
    /collections      -> name: favorites-collections -> component: `src/components/page/PersonalCenter/nav-tabs/favorites/Collections.vue`
```

# institute


一个vue的原型设计源码，使用vue3+vlite构建。
使用了:
1. element-plus
2. vue-router
3. storybook


## 构建
使用node 22.0.0版本
``` bash
npm install
```

## 运行
``` bash
npm run storybook
```

## 参与贡献

[UI原型](https://js.design/f/aEOFpu?p=TQQhbJr-N8&mode=design)

根据分组创建文件夹，并编写vue组件，同时创建对应的story文件。
代码上传请一定上传到dev分支。
import InterestCourse1 from './InterestCourse1.vue';
import InterestCourse from './InterestCourse.vue';
import CourseCard from './CourseCard.vue';
export default {
  title: 'HomePage/InterestCourse', // 只写一次
  component: InterestCourse,
  tags: ['autodocs'],
};

export const Default = {};                         // 有筛选
export const NoFilter = {                           // 无筛选
  render: () => ({
    components: { InterestCourse1 },
    template: '<InterestCourse1 />',
  }),
};

export const Card = { 
  render: () => ({
    components: { CourseCard },
    template: '<CourseCard />',
    args: {
      course: [
          { id: 1, title: '微软 Power BI 数据分析师', author: '陈恩翔', price: 99, image: '/src/assets/static/im-one.png', category: '热门' }
      ]
    }
})
};
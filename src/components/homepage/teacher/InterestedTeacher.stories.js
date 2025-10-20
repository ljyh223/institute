import InterestedTeacher from './InterestedTeacher.vue';
import InterestedTeacher1 from './InterestedTeacher1.vue';
import TeacherCard from './TeacherCard.vue';

export default {
  title: 'HomePage/InterestedTeacher',
  component: InterestedTeacher,
  tags: ['autodocs'],
};



export const Default1 = {
  render: () => ({                                  // 默认
    components: { InterestedTeacher1 },
    template: '<InterestedTeacher1 />',
  }),
};


export const Card = {
  render: () => ({                                  // 筛选
    components: { TeacherCard },
    template: '<TeacherCard />',
    args: {                                         // 筛选参数
      teachers: [
     { id: 1, name: '李明', field: '基础教育', bio: '前Google数据科学家, 10年机器学习经验', avatar: '/src/assets/static/李明.png', rate: 4.8 }
      ]
    }
})
};
export const Default = {
  args: {
  },
};
import CourseContent from './CourseContent.vue';

export default {
  title: 'HomePage/CourseContent',
  component: CourseContent,
  tags: ['autodocs'],
};

// 默认导出的故事
export const Default = {
  // 在 args 中提供所有组件需要的 props 数据
  args: {
    // 1. 提供 instructor 对象，这会直接修复 'avatar' 的错误
    instructor: {
      name: '张老师 (Storybook)',
      avatar: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg' // 提供一个可访问的图片URL
    },

    // 2. 提供其他 props 的模拟数据，让组件完整显示
    activeTab: 'about',
    activeCollapse: 0,
    learningGoals: [
      '学习使用 Storybook 提供 Props。',
      '理解组件化开发的数据流。',
      '掌握如何调试组件渲染错误。',
      '编写更健壮的 Vue 组件。',
    ],
    skills: ['Vue 3', 'Storybook', 'Element Plus', '调试'],
    courseOutline: [
      {
        title: '第1章：Storybook 基础',
        duration: '共30分钟',
        image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4', // 使用在线图片
        subChapters: [
          {
            title: '什么是 Storybook？',
            sections: ['第1节 介绍', '第2节 安装']
          }
        ]
      },
      {
        title: '第2章：编写 Stories',
        duration: '共45分钟',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40', // 使用在线图片
        subChapters: []
      }
    ]
  },
};
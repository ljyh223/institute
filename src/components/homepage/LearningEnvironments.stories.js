export default {
  title: 'Components/Homepage/LearningEnvironments',
  component: () => import('./LearningEnvironments.vue'),
  tags: ['autodocs'],
  argTypes: {
    environments: {
      description: '学习环境数据数组',
      control: { type: 'object' }
    },
    select: {
      description: '选择环境时触发的事件',
      action: 'selected'
    },
    more: {
      description: '点击查看更多按钮时触发的事件',
      action: 'loadMore'
    }
  }
};

export const Default = {
  args: {
    environments: [
      { 
        id: 1, 
        name: '多媒体教室', 
        image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop',
        selected: false 
      },
      { 
        id: 2, 
        name: '多媒体教室', 
        image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop',
        selected: false 
      },
      { 
        id: 3, 
        name: '多媒体教室', 
        image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop',
        selected: true 
      }
    ]
  }
};

export const Empty = {
  args: {
    environments: []
  }
};

export const SingleEnvironment = {
  args: {
    environments: [
      { 
        id: 1, 
        name: '多媒体教室', 
        image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop',
        selected: false 
      }
    ]
  }
};

export const AllSelected = {
  args: {
    environments: [
      { 
        id: 1, 
        name: '多媒体教室', 
        image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop',
        selected: true 
      },
      { 
        id: 2, 
        name: '实验室', 
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop',
        selected: true 
      },
      { 
        id: 3, 
        name: '讨论室', 
        image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format&fit=crop',
        selected: true 
      }
    ]
  }
};

export const MultipleEnvironments = {
  args: {
    environments: [
      { 
        id: 1, 
        name: '多媒体教室', 
        image: 'https://images.unsplash.com/photo-1581078426770-6d336e5de7bf?q=80&w=2070&auto=format&fit=crop',
        selected: false 
      },
      { 
        id: 2, 
        name: '实验室', 
        image: 'https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2070&auto=format&fit=crop',
        selected: false 
      },
      { 
        id: 3, 
        name: '讨论室', 
        image: 'https://images.unsplash.com/photo-1519452575417-564c1401ecc0?q=80&w=2070&auto=format&fit=crop',
        selected: false 
      },
      { 
        id: 4, 
        name: '自习室', 
        image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop',
        selected: false 
      },
      { 
        id: 5, 
        name: '会议室', 
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
        selected: false 
      },
      { 
        id: 6, 
        name: '创客空间', 
        image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2070&auto=format&fit=crop',
        selected: false 
      }
    ]
  }
};
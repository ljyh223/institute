export default {
  title: 'Components/Homepage/SharedSpaces',
  component: () => import('./SharedSpaces.vue'),
  tags: ['autodocs'],
  argTypes: {
    spaces: {
      description: '共享空间数据数组',
      control: { type: 'object' }
    },
    click: {
      description: '点击空间卡片时触发的事件',
      action: 'clicked'
    },
    more: {
      description: '点击查看更多按钮时触发的事件',
      action: 'loadMore'
    }
  }
};

export const Default = {
  args: {
    spaces: [
      { 
        id: 1, 
        name: '豪华办公室1', 
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
      },
      { 
        id: 2, 
        name: 'X OPENSPACE', 
        image: 'https://images.unsplash.com/photo-1604079618044-9c6e2a6379a2?q=80&w=2070&auto=format&fit=crop'
      },
      { 
        id: 3, 
        name: '豪华办公室3', 
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop'
      },
      { 
        id: 4, 
        name: '豪华办公室1', 
        image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2069&auto=format&fit=crop'
      },
      { 
        id: 5, 
        name: '豪华办公室3', 
        image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=2070&auto=format&fit=crop'
      }
    ]
  }
};

export const Empty = {
  args: {
    spaces: []
  }
};

export const SingleSpace = {
  args: {
    spaces: [
      { 
        id: 1, 
        name: '豪华办公室1', 
        image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop'
      }
    ]
  }
};
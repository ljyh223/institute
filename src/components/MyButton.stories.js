// src/components/MyButton.stories.js

import MyButton from './MyButton.vue';

// 这是故事的元数据，定义了这个故事的标题和它对应的组件
export default {
  title: 'Components/MyButton', // 在Storybook侧边栏中的显示路径
  component: MyButton,
  // 定义了Storybook如何自动生成交互式的控件 (Controls)
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
};

// 这是故事的模板，我们所有的故事都将复用这个模板
const Template = (args) => ({
  components: { MyButton },
  setup() {
    return { args };
  },
  template: '<my-button v-bind="args" />',
});

// "Primary" 是这个故事的一个变种 (variant)
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: '主按钮',
};

// "Secondary" 是另一个变种
export const Secondary = Template.bind({});
Secondary.args = {
  label: '次按钮',
};

// "Large" 是又一个变种
export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: '大按钮',
};

// "Small"
export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: '小按钮',
};
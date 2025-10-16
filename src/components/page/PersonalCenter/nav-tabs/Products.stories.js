// src/components/PersonalCenter/nav-tabs/Products.stories.js

import Products from './Products.vue'

export default {
  title: 'PersonalCenter/NavTabs/Products',
  component: Products,
}

const Template = (args) => ({
  components: { Products },
  setup() {
    return { args }
  },
  template: '<Products v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}



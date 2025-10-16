// src/components/PersonalCenter/nav-tabs/Credit.stories.js

import Credit from './Credit.vue'

export default {
  title: 'PersonalCenter/NavTabs/Credit',
  component: Credit,
}

const Template = (args) => ({
  components: { Credit },
  setup() {
    return { args }
  },
  template: '<Credit v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}



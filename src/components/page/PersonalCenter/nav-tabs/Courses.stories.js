// src/components/PersonalCenter/nav-tabs/Courses.stories.js

import Courses from './Courses.vue'

export default {
  title: 'PersonalCenter/NavTabs/Courses',
  component: Courses,
}

const Template = (args) => ({
  components: { Courses },
  setup() {
    return { args }
  },
  template: '<Courses v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}



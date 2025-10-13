// src/components/PersonalCenter/nav-tabs/Shared.stories.js

import Shared from './Shared.vue'

export default {
  title: 'PersonalCenter/NavTabs/Shared',
  component: Shared,
}

const Template = (args) => ({
  components: { Shared },
  setup() {
    return { args }
  },
  template: '<Shared v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}



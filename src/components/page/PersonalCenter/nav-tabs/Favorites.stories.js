// src/components/PersonalCenter/nav-tabs/Favorites.stories.js

import Favorites from './Favorites.vue'

export default {
  title: 'PersonalCenter/NavTabs/Favorites',
  component: Favorites,
}

const Template = (args) => ({
  components: { Favorites },
  setup() {
    return { args }
  },
  template: '<Favorites v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}



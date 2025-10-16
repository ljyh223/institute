// src/components/PersonalCenter/nav-tabs/Wallet.stories.js

import Wallet from './Wallet.vue'

export default {
  title: 'PersonalCenter/NavTabs/Wallet',
  component: Wallet,
}

const Template = (args) => ({
  components: { Wallet },
  setup() {
    return { args }
  },
  template: '<Wallet v-bind="args" />',
})

export const Default = Template.bind({})
Default.args = {}



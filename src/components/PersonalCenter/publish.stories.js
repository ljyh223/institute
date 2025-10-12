import publish from './publish.vue'

export default {
  title: 'components/PersonalCenter/publish',
  component: publish,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { publish },
    setup() {
      return { args }
    },
    template: '<publish v-bind="args" />'
  }),
  args: {}
}
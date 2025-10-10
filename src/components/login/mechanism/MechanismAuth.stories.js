import MechanismAuth from './MechanismAuth.vue'

export default {
  title: 'Login/Mechanism/MechanismAuth',
  component: MechanismAuth,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { MechanismAuth },
    setup() {
      return { args }
    },
    template: '<MechanismAuth v-bind="args" />'
  }),
  args: {}
}
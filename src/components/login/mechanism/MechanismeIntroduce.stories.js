import MechanismeIntroduce from './MechanismeIntroduce.vue'

export default {
  title: 'Login/Mechanism/MechanismeIntroduce',
  component: MechanismeIntroduce,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { MechanismeIntroduce },
    setup() {
      return { args }
    },
    template: '<MechanismeIntroduce v-bind="args" />'
  }),
  args: {}
}
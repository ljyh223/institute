import MechanismUpload1 from './MechanismUpload1.vue'

export default {
  title: 'Login/Mechanism/MechanismUpload1',
  component: MechanismUpload1,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { MechanismUpload1 },
    setup() {
      return { args }
    },
    template: '<MechanismUpload1 v-bind="args" />'
  }),
  args: {}
}
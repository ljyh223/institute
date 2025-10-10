import MechanismUpload from './MechanismUpload.vue'

export default {
  title: 'Login/Mechanism/MechanismUpload',
  component: MechanismUpload,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { MechanismUpload },
    setup() {
      return { args }
    },
    template: '<MechanismUpload v-bind="args" />'
  }),
  args: {}
}
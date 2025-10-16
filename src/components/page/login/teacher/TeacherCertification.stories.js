import TeacherCertification from './TeacherCertification.vue'

export default {
  title: 'Login/Teacher/TeacherCertification',
  component: TeacherCertification,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { TeacherCertification },
    setup() {
      return { args }
    },
    template: '<TeacherCertification v-bind="args" />'
  }),
  args: {}
}
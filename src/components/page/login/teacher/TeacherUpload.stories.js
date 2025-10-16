import TeacherUpload from './TeacherUpload.vue'

export default {
  title: 'Login/Teacher/TeacherUpload',
  component: TeacherUpload,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { TeacherUpload },
    setup() {
      return { args }
    },
    template: '<TeacherUpload v-bind="args" />'
  }),
  args: {}
}
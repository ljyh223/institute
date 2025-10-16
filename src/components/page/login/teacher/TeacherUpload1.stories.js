import TeacherUpload1 from './TeacherUpload1.vue'

export default {
  title: 'Login/Teacher/TeacherUpload1',
  component: TeacherUpload1,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { TeacherUpload1 },
    setup() {
      return { args }
    },
    template: '<TeacherUpload1 v-bind="args" />'
  }),
  args: {}
}
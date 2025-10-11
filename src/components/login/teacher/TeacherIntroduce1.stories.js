import TeacherIntroduce1 from './TeacherIntroduce1.vue'

export default {
  title: 'Login/Teacher/TeacherIntroduce1',
  component: TeacherIntroduce1,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { TeacherIntroduce1 },
    setup() {
      return { args }
    },
    template: '<TeacherIntroduce1 v-bind="args" />'
  }),
  args: {}
}
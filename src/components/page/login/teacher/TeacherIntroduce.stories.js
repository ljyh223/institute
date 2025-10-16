import TeacherIntroduce from './TeacherIntroduce.vue'

export default {
  title: 'Login/Teacher/TeacherIntroduce',
  component: TeacherIntroduce,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  render: (args) => ({
    components: { TeacherIntroduce },
    setup() {
      return { args }
    },
    template: '<TeacherIntroduce v-bind="args" />'
  }),
  args: {}
}
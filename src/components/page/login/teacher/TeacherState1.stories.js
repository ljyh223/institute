import TeacherState1 from './TeacherState1.vue'


export default {
  title: 'Login/Teacher/TeacherState1',
  component: TeacherState1,
  tags: ['autodocs'],
  argTypes: {
    onBack: { action: 'back' },
    onAgree: { action: 'agree' },
    onLogin: { action: 'login' }
  }
}

export const Default = {
  args: {}
}

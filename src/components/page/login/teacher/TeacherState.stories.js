import TeacherState from './TeacherState.vue'


export default {
  title: 'Login/Teacher/TeacherState',
  component: TeacherState,
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

import RegisetrEnter from './RegisetrEnter.vue'

export default {
  title: 'Login/Register/RegisetrEnter',
  component: RegisetrEnter,
  tags: ['autodocs'],
  argTypes: {
    onGetVerificationCode: { action: 'getVerificationCode' },
    onRegister: { action: 'register' },
    onToLogin: { action: 'toLogin' }
  }
}

export const Default = {
  args: {}
}
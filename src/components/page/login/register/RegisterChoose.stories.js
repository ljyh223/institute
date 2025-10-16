import RegisterChoose from './RegisterChoose.vue'

export default {
  title: 'Login/Register/RegisterChoose',
  component: RegisterChoose,
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
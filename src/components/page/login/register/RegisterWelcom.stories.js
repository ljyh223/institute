import RegisterWelcom from './RegisterWelcom.vue'

export default {
  title: 'Login/Register/RegisterWelcom',
  component: RegisterWelcom,
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
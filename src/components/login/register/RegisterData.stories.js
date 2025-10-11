import RegisterData from './RegisterData.vue'

export default {
  title: 'Login/Register/RegisterData',
  component: RegisterData,
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
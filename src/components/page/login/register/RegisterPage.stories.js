import RegisterPage from './RegisterPage.vue'

export default {
  title: 'Login/Register/RegisterPage',
  component: RegisterPage,
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
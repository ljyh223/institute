import MechanismState from './MechanismState.vue'


export default {
  title: 'Login/Mechanism/MechanismState',
  component: MechanismState,
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

import MechanismState1 from './MechanismState1.vue'


export default {
  title: 'Login/Mechanism/MechanismState1',
  component: MechanismState1,
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

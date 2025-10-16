import PersonHomepage1 from './PersonHomepage1.vue' 

export default {
  title: 'Homepage1/Person/PersonHomepage1', 
  component: PersonHomepage1, 
  tags: ['autodocs'],
}

export const Default = {
  render: (args) => ({
    components: { PersonHomepage1 },
    setup() {
      return { args }
    },
    template: '<PersonHomepage1 />'
  }),
  args: {} 
}
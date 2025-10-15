import PersonHomepage from './PersonHomepage.vue' 

export default {
  title: 'Homepage/Person/PersonHomepage', 
  component: PersonHomepage, 
  tags: ['autodocs'],
}

export const Default = {
  render: (args) => ({
    components: { PersonHomepage },
    setup() {
      return { args }
    },
    template: '<PersonHomepage />'
  }),
  args: {} 
}
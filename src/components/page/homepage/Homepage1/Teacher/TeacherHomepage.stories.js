import TeacherHomepage from './TeacherHomepage.vue' 

export default {
  title: 'Homepage1/Teacher/TeacherHomepage', 
  component: TeacherHomepage, 
  tags: ['autodocs'],
}

export const Default = {
  render: (args) => ({
    components: { TeacherHomepage },
    setup() {
      return { args }
    },
    template: '<TeacherHomepage />'
  }),
  args: {} 
}
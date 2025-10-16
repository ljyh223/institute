import TeacherHomepage1 from './TeacherHomepage1.vue' 

export default {
  title: 'Homepage1/Teacher/TeacherHomepage1', 
  component: TeacherHomepage1, 
  tags: ['autodocs'],
}

export const Default = {
  render: (args) => ({
    components: { TeacherHomepage1 },
    setup() {
      return { args }
    },
    template: '<TeacherHomepage1 />'
  }),
  args: {} 
}
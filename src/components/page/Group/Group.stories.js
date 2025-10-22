// Group.stories.js

import Group from './Group.vue';

// 1. Correct the 'title' to be a clean path without the file extension.
//    This is for display and organization in the Storybook UI.
export default {
  title: 'components/page/Group', // ✅ Corrected line
  component: Group,
  tags: ['autodocs'],
};

// 2. Define your story. It can be an empty object if no special args are needed.
export const Default = {};

// If you wanted to pass arguments (props) to your component in a story,
// you would do it like this:
/*
export const WithCustomProps = {
  args: {
    // your props here, though Group.vue doesn't have any defined
  },
};
*/
/** @type { import('@storybook/vue3-vite').Preview } */
// .storybook/preview.js
import { setup } from '@storybook/vue3'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '../src/styles/global.scss'

setup((app) => {
  app.use(ElementPlus)
})


const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },
}

export default preview

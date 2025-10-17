/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
import path from 'node:path'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
const dirname =
  typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
async function loadMockPlugin() {
  try {
    const { viteMockServe } = await import('vite-plugin-mock')
    return [
      viteMockServe({
        mockPath: 'mock',
        localEnabled: true,
      })
    ]
  } catch (err) {
    // 当 vite-plugin-mock 未安装时，忽略该插件，避免开发服务器启动失败
    return []
  }
}

export default defineConfig(async () => {
  const isVitest = !!process.env.VITEST
  return ({
  plugins: [
    vue(),
    // vueDevTools()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  test: {
    projects: [
      {
        extends: true,
        plugins: [
          // The plugin will run tests for the stories defined in your Storybook config
          // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
          storybookTest({
            configDir: path.join(dirname, '.storybook'),
          }),
          ...(isVitest ? (await loadMockPlugin()) : [])
        ],
        test: {
          name: 'storybook',
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [
              {
                browser: 'chromium',
              },
            ],
          },
          setupFiles: ['.storybook/vitest.setup.js'],
        },
      },
    ],
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @use "@/styles/variables.scss" as *;
        `,
      },
    },
  },
})
})

import { defineConfig, presetAttributify, presetUno, presetIcons } from 'unocss'

export default defineConfig({
  preflights: [
    {
      getCSS: () => `
        .el-button {
          background-color: var(--el-button-bg-color, var(--el-color-white))
        }
      `,
    },
  ],
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({ scale: 1.2, warn: true })
  ],
  shortcuts: [['wh-full', 'w-full h-full']],
  rules: [],
  theme: {}
})

import { includeIgnoreFile } from '@eslint/compat'
import { FlatCompat } from '@eslint/eslintrc'
import pluginJsxA11y from 'eslint-plugin-jsx-a11y'
import pluginReact from 'eslint-plugin-react'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import plugintypescriptEslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const gitignorePath = path.resolve(__dirname, '.gitignore')

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['prettier'],
  }),
  ...plugintypescriptEslint.configs.recommended,
  includeIgnoreFile(gitignorePath),
  {
    ...pluginJsxA11y.flatConfigs.strict,
    ...pluginReact.configs.flat.recommended,
    files: ['**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}'],
    settings: {
      react: {
        version: '19',
      },
    },
    rules: {
      'react/boolean-prop-naming': ['warn'],
      'react/forward-ref-uses-ref': ['warn'],
      'react/hook-use-state': ['warn'],
      'react/iframe-missing-sandbox': ['warn'],
      'react/jsx-boolean-value': ['warn', 'never'],
      'react/jsx-fragments': ['warn'],
      'react/jsx-handler-names': ['warn'],
      'react/jsx-no-bind': ['error'],
      'react/jsx-no-leaked-render': ['error'],
      'react/jsx-no-useless-fragment': ['warn', { allowExpressions: true }],
      'react/jsx-props-no-spread-multi': ['warn'],
      'react/sort-default-props': ['warn'],
      'react/jsx-sort-props': ['warn'],
      'react/no-array-index-key': ['error'],
      'react/no-invalid-html-attribute': ['warn'],
      'react/no-this-in-sfc': ['warn'],
      'react/no-unstable-nested-components': ['error'],
      'react/no-unused-state': ['warn'],
      'react/no-will-update-set-state': ['warn'],
      'react/prefer-read-only-props': ['warn'],
      'react/prefer-stateless-function': ['error'],
      'react/require-default-props': ['error'],
      'react/style-prop-object': ['warn'],
    },
  },
]

export default eslintConfig

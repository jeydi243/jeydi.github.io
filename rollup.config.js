import resolve from '@rollup/plugin-node-resolve'
import { babel } from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import css from 'rollup-plugin-import-css'

export default {
    input: 'index.js',
    output: { dir: 'dist', format: 'iife' },
    plugins: [
        resolve(),
        commonjs(),
        css(),
        babel({ babelHelpers: 'bundled', exclude: 'node_modules/**' }),
    ],
}

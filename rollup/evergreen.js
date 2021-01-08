import resolve from 'rollup-plugin-node-resolve';
import includePaths from 'rollup-plugin-includepaths';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'esm/index.js',
  plugins: [
    includePaths({
      include: {
        "@ungap/weakmap": "./node_modules/@ungap/degap/weakmap.js"
      },
    }),
    resolve({module: true}),
    terser()
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    esModule: false,
    file: 'eg.js',
    format: 'iife',
    name: 'templateLiteral'
  }
};

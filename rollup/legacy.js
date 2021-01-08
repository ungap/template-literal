import resolve from 'rollup-plugin-node-resolve';
export default {
  input: 'esm/index.js',
  plugins: [
    resolve()
  ],
  context: 'null',
  moduleContext: 'null',
  output: {
    esModule: false,
    exports: 'named',
    file: 'index.js',
    format: 'iife',
    name: 'templateLiteral'
  }
};

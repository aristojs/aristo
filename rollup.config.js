/*import flow from 'rollup-plugin-flow'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';*/

import buble from 'rollup-plugin-buble'

export default {
  entry: 'lib/aristo.js',
  dest: 'dist/aristo.js',
  format: 'umd',
  moduleId: 'aristo',
  moduleName: 'Aristo',
//  sourceMap: 'false',
  plugins: [
    // flow(),
    // nodeResolve({ jsnext: true, main: true }),
    // commonjs(),
    buble()
  ]
}

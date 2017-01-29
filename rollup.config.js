/*import flow from 'rollup-plugin-flow'
import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs';*/

import buble from 'rollup-plugin-buble'

export default {
  entry: 'lib/classlayer.js',
  dest: 'dist/classlayer.js',
  format: 'umd',
  moduleId: 'classlayer',
  moduleName: 'Classlayer',
//  sourceMap: 'false',
  plugins: [
    // flow(),
    // nodeResolve({ jsnext: true, main: true }),
    // commonjs(),
    buble()
  ]
}

import { equal } from 'zoroaster/assert'
import context, { Context } from '../context' // eslint-disable-line no-unused-vars
import artdecoBuild from '../../src'

/** @type {Object.<string, (ctx: Context)>} */
const T = {
  context,
  'is a function'() {
    equal(typeof artdecoBuild, 'function')
  },
  async 'calls package without error'() {
    await artdecoBuild()
  },
  async 'calls test context method'({ example }) {
    await example()
  },
}

export default T

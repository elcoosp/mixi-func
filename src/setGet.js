import { camelCasePrefix } from './utils'
const setGet = (setter = (x, y) => y) => (getter = x => x) => prop => (
  value = null
) => o => ({
  ...o,
  [camelCasePrefix`set`(prop)]: (...a) => (value = setter(value, ...a)),
  [camelCasePrefix`get`(prop)]: (...a) => getter(value, ...a)
})

export default setGet

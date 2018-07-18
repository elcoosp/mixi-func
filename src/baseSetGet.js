import setGet from './setGet'
import { firstEntry } from './utils'

const baseSetGet = (keyValue = {}) => {
  const [key, val] = firstEntry(keyValue)
  return setGet()()(key)(val)
}

export default baseSetGet

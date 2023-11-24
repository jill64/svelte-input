import type { GroupedInput } from '../types/GroupedInput'
import type { ListInput } from '../types/ListInput'

export const isGroupedInput = (
  input: ListInput | GroupedInput
): input is GroupedInput => {
  if (Array.isArray(input) || input instanceof Set) {
    return false
  }

  if (input instanceof Map) {
    return [...input.values()].every((x) => typeof x !== 'string')
  }

  return Object.values(input).every((x) => typeof x !== 'string')
}

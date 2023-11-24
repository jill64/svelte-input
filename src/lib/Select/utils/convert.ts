import type { GroupedInput } from '../types/GroupedInput'
import type { GroupedOutput } from '../types/GroupedOutput'
import type { ListInput } from '../types/ListInput'
import type { ListOutput } from '../types/ListOutput'
import { convertList } from './convertList'
import { isGroupedInput } from './isGroupedInput'

export const convert = (
  input: ListInput | GroupedInput
): ListOutput | GroupedOutput =>
  !isGroupedInput(input)
    ? convertList(input)
    : (input instanceof Map ? [...input.entries()] : Object.entries(input)).map(
        ([label, { disabled, list }]) => ({
          label,
          disabled,
          list: convertList(list)
        })
      )

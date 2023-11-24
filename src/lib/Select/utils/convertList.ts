import type { ListInput } from '../types/ListInput'
import type { ListOutput } from '../types/ListOutput'

type Value = {
  value: string
  disabled?: boolean
  selected?: boolean
}

const parseValue = (value: string | Value): Value =>
  typeof value === 'string' ? { value } : value

export const convertList = (list: ListInput): ListOutput =>
  Array.isArray(list) || list instanceof Set
    ? [...list].map((x) => {
        const parsed = parseValue(x)
        return {
          label: parsed.value,
          ...parsed
        }
      })
    : (list instanceof Map ? [...list.entries()] : Object.entries(list)).map(
        ([label, value]) => ({
          label,
          ...parseValue(value)
        })
      )

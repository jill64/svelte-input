import type { ListInput } from './ListInput'

type ListInputValue = {
  disabled?: boolean
  list: ListInput
}

export type GroupedInput =
  | Record<string, ListInputValue>
  | Map<string, ListInputValue>

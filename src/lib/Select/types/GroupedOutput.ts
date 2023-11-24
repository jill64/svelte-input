import type { ListOutput } from './ListOutput'

export type GroupedOutput = {
  label: string
  disabled?: boolean
  list: ListOutput
}[]

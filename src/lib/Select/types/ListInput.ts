type InputValue = {
  value: string
  selected?: boolean
  disabled?: boolean
}

export type ListInput =
  | string[]
  | Set<string>
  | Record<string, string>
  | Map<string, string>
  | InputValue[]
  | Set<InputValue>
  | Record<string, InputValue>
  | Map<string, InputValue>

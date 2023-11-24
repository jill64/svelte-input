import type { GroupedOutput } from '../types/GroupedOutput'
import type { ListOutput } from '../types/ListOutput'

export const isGroupedOutput = (
  output: ListOutput | GroupedOutput
): output is GroupedOutput => output.every((x) => 'list' in x)

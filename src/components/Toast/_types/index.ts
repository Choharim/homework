export type Variety = 'confirm' | 'error' | 'normal'

export type Toast = {
  id: number
  variety: Variety
  desc?: React.ReactNode
}

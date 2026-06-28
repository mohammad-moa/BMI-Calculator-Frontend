import { IMeta } from '@models/meta/index.type'

export interface IPaginate<T> {
  items?: T[]
  meta?: IMeta
}

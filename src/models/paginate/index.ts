import { Meta } from '@models/meta'
import { IPaginate } from './index.type'

type ClassConstructor<T> = new (...args: any[]) => T

export class Paginate<T, C> {
  protected props: IPaginate<T> = {}
  itemConstructor: ClassConstructor<C>

  constructor(itemConstructor: ClassConstructor<C>, data?: IPaginate<T>) {
    this.itemConstructor = itemConstructor
    if (data) {
      this.props = data
    }
  }

  getItems(): C[] {
    return (this.props.items || []).map((item) => new this.itemConstructor(item))
  }

  getMeta(): Meta {
    return new Meta(this.props.meta || {})
  }
}

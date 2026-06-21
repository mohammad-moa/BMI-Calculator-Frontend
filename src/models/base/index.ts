import { IBase } from './index.type'

export abstract class Base {
  protected props: IBase = {}

  constructor(data?: IBase) {
    if (data) {
      this.props = data
    }
  }

  getId(): string {
    return this.props.id || ''
  }

  getCreatedAt(): Date {
    return this.props.createdAt ? new Date(this.props.createdAt) : new Date()
  }

  getUpdatedAt(): Date {
    return this.props.updatedAt ? new Date(this.props.updatedAt) : new Date()
  }

  getDeletedAt(): Date {
    return this.props.deletedAt ? new Date(this.props.deletedAt) : new Date()
  }
}

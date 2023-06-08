import { AnyAction } from "@reduxjs/toolkit"

export interface Request<T> extends AnyAction {
  response?: ResponseType
  payload?: T
  componentId?: string
  loading?: boolean
}
interface ResponseType {
  success?: {
    type: string
    forwarder?: Request<Obj>
    trigger?: Request<Obj>
  }
  failure?: {
    type: string
    trigger?: Request<Obj>
  }
  extra?: Record<string, unknown>
}

export interface Obj {
  // eslint-disable-next-line
  [key: string]: {} | undefined
}

export interface Action<T> {
  type: string
  payload: T
  loading?: boolean
  componentId?: string
}

export interface Socket {
  event: string
  data: {
    avatarUrl: string
    displayName: string
    id: number
    pinId: number
  }
}

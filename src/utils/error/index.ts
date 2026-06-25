import { ServerError } from '@services'

export const generateServerError = (error: unknown): string => {
  if (error && typeof error === 'object') {
    const serverMessage = error as ServerError
    if (Array.isArray(serverMessage.message)) {
      return serverMessage.message.join(', ')
    }
    return serverMessage.message
  }
  return error instanceof Error ? error.message : 'An unexpected error occurred'
}

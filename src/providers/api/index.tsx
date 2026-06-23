import { useState } from 'react'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useToast } from '@hooks'
import { ServerError } from '@services'

const getServerError = (error: unknown): string => {
  if (error && typeof error === 'object') {
    const serverMessage = error as ServerError
    if (Array.isArray(serverMessage.message)) {
      return serverMessage.message.join(', ')
    }
    return serverMessage.message
  }
  return error instanceof Error ? error.message : 'An unexpected error occurred'
}

export const ApiProviders: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { toast } = useToast()
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 5, // 5 min
            refetchOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
        queryCache: new QueryCache({
          onError: (error) => {
            toast({
              message: getServerError(error),
              color: 'error',
            })
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            toast({
              message: getServerError(error),
              color: 'error',
            })
          },
        }),
      })
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

import { useState } from 'react'
import { MutationCache, QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
// utils
import { generateServerError } from '@utils'
// hooks
import { useToast } from '@hooks'

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
              message: generateServerError(error),
              color: 'error',
            })
          },
        }),
        mutationCache: new MutationCache({
          onError: (error) => {
            toast({
              message: generateServerError(error),
              color: 'error',
            })
          },
        }),
      })
  )

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

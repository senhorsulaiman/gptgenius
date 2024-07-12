import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
const Providers = ({ children }) => {

  const [queryClient] =

    useState(() => new QueryClient({

      defaultOptions: {

        queries: {
          staleTime: 60 * 1000,
        },
      },
    })

    )
  return (

    <QueryClientProvider client={queryClient} >
      <Toaster position='top-center' />
      <div>{children}</div >
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider >


  )
}

export default Providers

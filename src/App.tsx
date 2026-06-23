import { FC, Suspense } from 'react'
import { Outlet } from 'react-router'
// layouts
import { Footer, Header } from '@layouts'
// providers
import { ApiProviders, ToastProvider } from '@providers'

const App: FC = () => {
  return (
    <Suspense fallback={<>Loading ...</>}>
      <ToastProvider>
        <ApiProviders>
          <div className='flex flex-col h-screen'>
            <Header />
            <Outlet />
            <Footer />
          </div>
        </ApiProviders>
      </ToastProvider>
    </Suspense>
  )
}

export default App

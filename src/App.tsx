import DnsRecord from '@/features/dns-record'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: '*',
      element: <DnsRecord />
    },
  ])

  const FallbackElement = () => (
    <div className="position-absolute top-50 start-50 translate-middle">
      <div className="spinner-border text-light" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )

  return (
    <div className='container mx-auto'>
      <RouterProvider
        router={router}
        fallbackElement={<FallbackElement />}
      />
    </div>
  )
}

export default App

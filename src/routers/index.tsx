import { createBrowserRouter } from 'react-router'
// pages
import { HistoryPage, HomePage } from '@pages'
// constants
import { HISTORY_ROUTE, MAIN_ROUTE } from '@constants/routes'
// locals
import App from '../App'

export const router = createBrowserRouter(
  [
    {
      path: MAIN_ROUTE,
      element: <App />,
      children: [
        { index: true, element: <HomePage /> },
        {
          path: HISTORY_ROUTE,
          element: <HistoryPage />,
        },
      ],
    },
  ],
  {
    basename: '/BMI-Calculator-Frontend', // For Github Actions
  }
)

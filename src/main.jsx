import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router';

import './index.css';
import './vars.css';

// Pages
import Landing from './pages/Landing.jsx';
import PageNotFound from './pages/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    errorElement: <PageNotFound />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

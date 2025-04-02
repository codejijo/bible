import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from '@/App.jsx'
import { ThemeProvider } from '@/context/theme-context';
import { BookProvider } from './context/book-context';
import Welcome from '@/components/pages/welcome';
import Chapters from '@/components/pages/chapters';

export const RootURL = "https://bible-api.com/data"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, Component: Welcome },
      { path: "/:bookID", Component: Chapters },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BookProvider>
        <RouterProvider router={router} />
      </BookProvider>
    </ThemeProvider>
  </StrictMode>,
)

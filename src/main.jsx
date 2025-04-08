import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router";
import './index.css'
import App from '@/App.jsx'
import { ThemeProvider } from '@/context/theme-context';
import { VersionProvider } from './context/book-context';
import Welcome from '@/components/pages/welcome';
import Chapters from '@/components/pages/chapters';
import Verses from './components/pages/verses';

export const RootURL = "https://bible-api.com/data";

const fetchData = async (book, chapter = "") => {
  if (chapter == "") {
    const response = await fetch(`${RootURL}/web/${book}`).then(res => res.json())
    return response.chapters;
  } else {
    const response = await fetch(`${RootURL}/web/${book}/${chapter}`).then(res => res.json())
    return response.verses;
  }
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Welcome },
      {
        path: "/:bookID",
        Component: Chapters,
        loader: async ({ params }) => {
          let data = await fetchData(params.bookID)
          return { chapters: data }
        },
        hydrateFallbackElement: (
          <div className='flex w-full h-full justify-center items-center'>Loading..</div>
        )
      },
      {
        path: "/:bookID/:chapterID",
        Component: Verses,
        loader: async ({ params }) => {
          let data = await fetchData(params.bookID, params.chapterID)
          return { verses: data }
        },
        hydrateFallbackElement: (
          <div className='flex w-full h-full justify-center items-center'>Loading..</div>
        )
      },
    ],
  },
], {
  future: {
    v7_partialHydration: true,
  }
}
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <VersionProvider>
        <RouterProvider router={router} />
      </VersionProvider>
    </ThemeProvider>
  </StrictMode>,
)

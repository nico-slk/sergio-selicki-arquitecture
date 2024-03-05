import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { ErrorPage } from '../hamburger/ErrorPage';
import { Home } from '../hamburger/Home';
import { Models, loaderPosts } from '../hamburger/Models';
import { Projects } from '../hamburger/Projects';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/models",
        element: <Models />,
        loader: loaderPosts
      }
    ]
  },
]);

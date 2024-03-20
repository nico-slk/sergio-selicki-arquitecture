import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import { About } from '../hamburger/About';
import { Contact } from '../hamburger/Contact';
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
        path: "/",
        element: <Home />,
        children: [
          {
            index: true,
            element: <>Hola</>,
          }
        ]
      },
      {
        path: "/projects",
        element: <Projects />,
        children: [
          {
            index: true,
            element: <>Hola</>,
          }
        ]
      },
      {
        path: "/models",
        element: <Models />,
        loader: loaderPosts,
        children: [
          {
            index: true,
            element: <>Hola</>,
          }
        ]
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            index: true,
            element: <>Hola</>,
          }
        ]
      },
      {
        path: "/contact",
        element: <Contact />,
        children: [
          {
            index: true,
            element: <>Hola</>,
          }
        ]
      },
    ]
  },
]);

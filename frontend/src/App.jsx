import { RouterProvider, createBrowserRouter } from 'react-router';
import Root from "./pages/Root.jsx";
import Ana from "./pages/Ana.jsx";
import About from "./pages/About.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Ana /> },
        { path: '/hakkimda', element: <About /> },
        { path: '/projeler', element: <Project /> },
        { path: '/iletisim', element: <Contact /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;

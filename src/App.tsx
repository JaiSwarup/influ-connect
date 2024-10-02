import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Root from "./routes/root";
import Register from "./routes/register";
import Search from "./routes/search";


const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path : "/",
        element: <Root />
      },
      {
        path : "/register",
        element: <Register />
      },
      {
        path : "/search",
        element: <Search />
      },
      {
        path : "/login",
        element: <div>Login</div>
      }
    ]
  }
]);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

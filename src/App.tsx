import { RouterProvider, Route, createRoutesFromElements, createBrowserRouter } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Root from "./routes/root";
import Register from "./routes/register";
import Search from "./routes/search";

const routes = createRoutesFromElements([
  <Route>
    <Route path="/" element={<RootLayout/>}>
      <Route index element={<Root/>}></Route>
      <Route path="register" element={<Register/>} />
      <Route path="search" element={<Search/>} />
    </Route>
  </Route>
]);

const router = createBrowserRouter(routes);


function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App

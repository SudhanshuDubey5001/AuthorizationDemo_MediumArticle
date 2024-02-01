import {
  Navigate,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthHeaderLayout from "./layouts/AuthHeaderLayout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import MainHeaderLayout from "./layouts/MainHeaderLayout";
import TravelBlogPage from "./pages/mainpage";

function App() {
  const authRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AuthHeaderLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>
    )
  );

  const mainRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainHeaderLayout />}>
          <Route path="/" element={<TravelBlogPage />} />
        </Route>
      </Route>
    )
  );

  return <RouterProvider router={mainRouter} />;
}

export default App;

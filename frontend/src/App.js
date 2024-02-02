import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import AuthHeaderLayout from "./layouts/AuthHeaderLayout";
import Login from "./pages/login";
import Signup from "./pages/signup";
import MainHeaderLayout from "./layouts/MainHeaderLayout";
import TravelBlogPage from "./pages/mainpage";
import { useDispatch, useSelector } from "react-redux";
import { checkIsUserLoggedIn } from "./redux/slices/authSlice";

function App() {
  const authRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<AuthHeaderLayout />}>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* for all the other routes we will redirect the user to Login page by using Navigate tag from react-router-dom */}
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
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Route>
    )
  );

  const dispatcher = useDispatch();
  dispatcher(checkIsUserLoggedIn());
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  if (!isLoggedIn) {
    return <RouterProvider router={authRouter} />;
  }
  return <RouterProvider router={mainRouter} />;
}

export default App;

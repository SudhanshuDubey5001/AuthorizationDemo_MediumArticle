import { useDispatch } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { logout } from "../redux/slices/authSlice";

export default function MainHeaderLayout() {
  const dispatcher = useDispatch();

  const logoutuser = (e) => {
    e.preventDefault();
    dispatcher(logout());
  };

  return (
    <div>
      <header>
        <div className="root-layout-header">
          <NavLink to="/">
            <h1>Authorization Demo</h1>
          </NavLink>
        </div>
        <nav>
          <div>
            <NavLink to="/item1">Book</NavLink>
            <NavLink to="/item2">Pricing</NavLink>
            <NavLink to="/item3">Account</NavLink>
            <button onClick={logoutuser}>Logout</button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

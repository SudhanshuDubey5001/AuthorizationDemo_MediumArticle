import { NavLink, Outlet } from "react-router-dom";

export default function MainHeaderLayout() {
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
            <button>Logout</button>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

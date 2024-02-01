import { NavLink, Outlet } from "react-router-dom";

export default function AuthHeaderLayout() {
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
            <NavLink to="/item1">Item 1</NavLink>
            <NavLink to="/item2">Item 2</NavLink>
            {/* <button>Logout</button> */}
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

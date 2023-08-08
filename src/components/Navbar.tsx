import { ChildrenProps } from "../types";

function Navbar({ children }: ChildrenProps) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}

function Logo() {
  return (
    <div className="logo">
      <span role="img">🍿</span>
      <h1>Movietron</h1>
    </div>
  );
}

export default Navbar;

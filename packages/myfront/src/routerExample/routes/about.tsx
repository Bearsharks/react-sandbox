import { Link, Outlet } from "@tanstack/react-router";

const AboutLayout = () => {
  return (
    <div>
      <h2>About</h2>
      <nav>
        <Link to="/about/my">My</Link> | <Link to="/about/you">You</Link>
      </nav>
      <div style={{ border: "1px solid blue", padding: "2px" }}>
        어바웃
        <Outlet />
      </div>
    </div>
  );
};

export default AboutLayout;

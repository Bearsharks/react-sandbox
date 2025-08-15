import { Link } from "@tanstack/react-router";

const HomeIndex = () => {
  return (
    <div>
      <h1>Home</h1>
      <nav>
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
};

export default HomeIndex;

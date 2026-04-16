import { Link, Outlet } from "react-router-dom";

export const Product = () => {
  return (
    <div>
      <div>Product Page</div>
      <div className="mt-4 flex flex-col gap-4">
        <nav>
          <Link to="featured">Featured</Link>
          <Link to="new">New</Link>
        </nav>
        <Outlet />
      </div>
    </div>
  );
};

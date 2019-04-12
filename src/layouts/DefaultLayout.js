import React from "react";
import { Link } from "react-router-dom";

export default function({ children }) {
  return (
    <div>
      <nav>
        <Link to="/">Homepage</Link>
        <Link to="/books">Books page</Link>
      </nav>
      <div>{children}</div>
    </div>
  );
}

import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    background: "#333",
    color: "white",
    height: "100vh"
  },
  nav: {
    padding: "1rem",
    background: "white",
    displayType: "none",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center"
  }
};

export default function LayoutMain({ children }) {
  return (
    <div>
      <nav style={styles.nav}>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div> | </div>
        <div>
          <Link to="/books">Books</Link>
        </div>
      </nav>

      <div style={styles.container}>
        <div style={{ padding: "2rem" }}>{children}</div>
      </div>
    </div>
  );
}

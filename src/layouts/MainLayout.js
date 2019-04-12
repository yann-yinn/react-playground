import React from "react";
import { Link } from "react-router-dom";

const styles = {
  container: {
    background: "#333",
    color: "white",
    height: "100vh"
  },
  nav: {
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
          <Link to="/films">Films</Link>
        </div>
      </nav>

      <div style={styles.container}>
        <div style={{ padding: "10rem" }}>{children}</div>
      </div>
    </div>
  );
}

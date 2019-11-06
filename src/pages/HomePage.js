import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <main>
      <h1>Home!</h1>
      Click <Link to="/message">here</Link> to send a slack message
    </main>
  );
};

export default HomePage;

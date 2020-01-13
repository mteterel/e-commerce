import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Home = () => {
  const categories = ["cpu", "memory", "graphics-card", "motherboard"];

  return (
    <div>
      <Helmet title={"Home"} />
      <div>
        <ul>
        {categories.map((v,i) => (
          <li key={i}><Link to={"/browse/" + v}>Browse <strong>{v}</strong></Link></li>
        ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;

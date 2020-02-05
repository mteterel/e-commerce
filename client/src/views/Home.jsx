import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import apiService from "../api";
import CategoriesHome from "../components/CategoriesHome";

const Home = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    apiService.fetchCategoryList().then(res => {
      setCategories(res.data.categories);
    });
  }, []);

  return (
    <div>
      <Helmet title={"Home"} />
      <CategoriesHome />
      {/* {categories ? (
        <div>
          <div>
            <ul>
              {categories.map((v, i) => (
                <li key={i}>
                  <Link to={"/browse/" + v.slug}>
                    Browse <strong>{v.slug}</strong>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <div>Loading...</div>
      )} */}
    </div>
  );
};

export default Home;

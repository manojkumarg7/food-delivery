import React from "react";
import Header from "../../Components/Header/Header";
import ExploreMenu from "../../Components/ExploreMenu/ExploreMenu";
import { useState } from "react";
import FoodDisplay from "../../FoodDisplay/FoodDisplay";
import AppDownload from "../../Components/AppDownloader/AppDownload";
const Home = () => {
  const [category, setCategory] = useState("All");

  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;

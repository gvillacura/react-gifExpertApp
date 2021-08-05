import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {
  const [category, setCategory] = useState(["One Punch"]);

  return (
    <>
      <h2>GifExpertApp</h2>
      <hr />
      <AddCategory setCategory={setCategory} />

      {category.map(cat => {
        return <GifGrid key={cat} category={cat} />;
      })}
    </>
  );
};

export default GifExpertApp;

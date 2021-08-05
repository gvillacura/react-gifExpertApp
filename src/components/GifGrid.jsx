import React from "react";
import GifGridItem from "./GifGridItem";
import useFetchGifs from "./hooks/useFetchGifs";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      {loading && <p>Cargando...</p>}
      <h3>{category}</h3>
      <div className="card-grid">
        {images.map(img => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};

export default GifGrid;

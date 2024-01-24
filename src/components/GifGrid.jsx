 import { useState, useEffect } from "react";
 import { GifGridItem } from "./GifGridItem";
 import { useFetchGifs } from "../hooks/useFetchGifs";
// import { getGifs } from "../helpers/getGifs";
  
export const GifGrid = ({ category }) => {
  
  const { images, isLoading } = useFetchGifs(category);

  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        
        <div className="card-grid">
          { images.map( (img) => (
            <GifGridItem 
            key={img.id} 
            { ...img } //Esparse todas las propiedades
            />
          )) 
          }
        </div>
       
    </>
  )
}

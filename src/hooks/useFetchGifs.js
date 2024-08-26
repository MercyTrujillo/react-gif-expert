
import { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifts";

export const useFetchGifs = (category) => {


  const [images, setImages] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

    const getImages= async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(()=>{        
            getImages();  
    },[]) //dependencias vacias significa que solo se dispara cuando se crea el componente


  return {
    images,
    isLoading
}
}


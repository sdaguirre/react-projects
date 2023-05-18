import { useEffect, useState } from "react";

const CAT_PREFIX_IMAGE_URL = `https://cataas.com/`;

export function useCatimage({ fact }) {
  const [imagen, setImagen] = useState();

  useEffect(() => {
    if (!fact) return;

    const firstWords = fact.split(" ", 3).join(" ");
    console.log(firstWords);

    fetch(`https://cataas.com/cat/says/${firstWords}?color=red&json=true`)
      .then((res) => res.json())
      .then((response) => {
        const { url } = response;
        setImagen(url);
      });
  }, [fact]);

  return { imagen: `${CAT_PREFIX_IMAGE_URL}${imagen}` };
}

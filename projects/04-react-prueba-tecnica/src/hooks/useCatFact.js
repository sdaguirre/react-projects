import { useEffect, useState } from "react";
import { getRandomCats } from "../services/facts";

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomCats().then(setFact);
  };

  useEffect(refreshFact, []);

  return { fact, refreshFact };
}

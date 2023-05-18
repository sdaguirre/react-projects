import "./App.css";
import { useCatimage } from "./hooks/useCatImage";
import { useCatFact } from "./hooks/useCatFact";

function App() {
  const { fact, refreshFact } = useCatFact();
  const { imagen } = useCatimage({ fact });

  const handleReload = async () => {
    refreshFact();
  };

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleReload}>Get new Fact</button>
      {fact && <p>{fact}</p>}
      {imagen && (
        <img
          src={`${imagen}`}
          alt={`Imaage extracted using the first three words of ${fact}`}
        />
      )}
    </main>
  );
}

export default App;

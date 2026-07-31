import { useState } from "react";
import "./App.css";

function App() {
  const [rep, setRep] = useState<string | null>(null)

  const testFetch = async () => {
    const reponse = await fetch("/test");

    if (!reponse.ok) {
      console.log("test erreur");
      setRep(null)
    } else {
      const data = await reponse.json();
		console.log(data)
        if (typeof data === 'string' || data === null) {
        setRep(data);
      } else {
        setRep(data.message || JSON.stringify(data));
      }
    }
  };

  return (
      <section id="center">
          <h1>Get started</h1>
        <button
          type="button"
          className="counter"
          onClick={() => testFetch()}
        >
        Requête : {rep}
        </button>
        <p className="text-red-400">Test</p>
      </section>
  );
}

export default App;

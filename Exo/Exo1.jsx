// Partie JS
const { useState } = React;

const App = () => {
  const [nbClics, setNbClics] = useState(0);
  const incrementer = () => {
    setNbClics(nbClics + 1);
  }

  // Partie HTML
  return (
    <>
      <button onClick={incrementer}>Cliquer</button>
      <h1>Nombre de clics : {nbClics}</h1>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

const { useState } = React;

const App = () => {
    // Partie JS
    const [nom, setNom] = useState('Max');
    const [handle, setHandle] = useState(true);
    const change = () => {
        setNom(handle ? 'Elise' : 'Max');
        setHandle(!handle);


    } 


    // Partie HTML
  return (
    <>
    <button onClick={change}>Change</button>
      <h1>Hello {nom}</h1>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
    <App />
);

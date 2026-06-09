const { useState } = React;

const App = () => {
  // Partie JS
  // const [nom, setNom] = useState("Toto");
     const [liste, setListe] = useState([
      {id: 1, nom: 'Alpha'},
      {id: 2, nom: 'Beta'},
      {id: 3, nom: 'Omega'}
     ]);

  // Partie HTML
  const listItems = liste.map((item) => <li key={item.id}>{item.nom}</li>);
  return (
    <>
      <div>
        <ul>
            {listItems}
        </ul>
      </div>
    </>
  );
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(
<App />
);

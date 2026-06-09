const { useState } = React;

const App = () => {
  // Partie JS
  const [liste, setListe] = useState([
      {id: 1, nom: 'Alpha'},
      {id: 2, nom: 'Beta'},
      {id: 3, nom: 'Omega'}
  ]);

  const [nom, setNom] = useState("");

  const ajouterNom = () => {

    const nouvelObjet = { id: liste.length+1, nom };
    setListe([...liste, nouvelObjet]);
  };
  
  const listItems = liste.map((item) => (
    <li key={item.id}>
      {item.id} - {item.nom}
    </li>
  ));

  // Partie HTML
  return (
    <>
      <div>
        <input value={nom} onChange={(e) => setNom(e.target.value)} />
        <button onClick={ajouterNom}>Ajouter</button>
        <ul>{listItems}</ul>
      </div>
    </>
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);

const { useState } = React;

const App = () => {
  const [liste, setListe] = useState([
    { nom: "Julien" }, 
    { nom: "Christophe" }, 
    { nom: "Roby" }
  ]);

  const [selectedUser, setSelectedUser] = useState("??");
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, `${selectedUser} doit faire ${task}`]);
    setTask("");
  };

  // Partie HTML
  return (
    <>
      <h1>Tâche pour {selectedUser} !</h1>

      <h3>Choisir un membre :</h3>

      <ul>
        {liste.map((personne, index) => (
          <button
            key={index}
            onClick={() => setSelectedUser(personne.nom)}
            style={{
              display: "block",
              margin: "4px",
            }}
          >
            {personne.nom}
          </button>
        ))}
      </ul>

      <h3>Assigner une tâche :</h3>

      <input placeholder="doit ..." 
      value={task} 
      onChange={(e) => setTask(e.target.value)} 
      />

      <button onClick={addTask}>Ajouter</button>

      <h3>Tâches :</h3>

      <ul>
        {tasks.map((tache, index) => (
          <li key={index}>{tache}</li>
        ))}
      </ul>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

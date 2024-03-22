import React, { useState } from "react";

function Main() {
  const [val, setVal] = useState("");
  const [names, setNames] = useState([]);

  // Añadir elemento a la lista
  const addName = (event) => {
    event.preventDefault();
    if (val !== "") {
      setNames([...names, val]);
      setVal("");
    }
  };

  // Eliminar elemento de la lista
  const deleteName = (index) => {
    const updatedNames = [...names];
    updatedNames.splice(index, 1); // Elimina el elemento en el índice dado
    setNames(updatedNames);
  };

  return (
    <div>
      <form onSubmit={addName}>
        <input
          onChange={(e) => setVal(e.target.value)}
          value={val}
          placeholder="Enter a name"
        />
        <button type="submit">Add Name</button>
      </form>
      <ul>
        {names.map((name, index) => (
          <li key={index}>
            {name} <button onClick={() => deleteName(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default Main;

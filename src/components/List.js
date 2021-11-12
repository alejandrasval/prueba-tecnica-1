import React, { useState, useEffect } from "react";
import "../styles/List.css";
import axios from "axios";
import { url } from "../url/url";

export const List = () => {
  const [registro, setRegistro] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get(url)
    .then(response => setRegistro(response.data))
    .catch(error => console.log(error))
}

const deleteData = (id) => {
    axios.delete(url + id).then(response => {getData();
      console.log(response.data)})
    .catch(error => console.log(error))
}


  return (
    <div>
      <table className="tabla">
        <thead>
          <tr>
            <th>Nombre Completo</th>
            <th>Código</th>
            <th>Imagen</th>
          </tr>
        </thead>

        <tbody>
        {registro.map(obj => (
                         <tr key={obj.id}>
                            <td>{obj.nombre}</td>
                            <td>{obj.codigo}</td>
                            <td><img src={obj.imagen} alt="" width="50" height="50"/></td>
                            <td><button onClick={() => deleteData(obj.id)}>Eliminar</button></td>
                        </tr>
                     ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default List;

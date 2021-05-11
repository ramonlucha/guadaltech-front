import React, { useEffect, useState } from "react";
import Formulario from "./components/Formulario";
import Becarios from "./components/Becarios";
function App() {
  const [busqueda, guardarBusqueda] = useState("");
  const [listadoBecarios, guardaListadoBecarios] = useState([]);
  const [error, guardarError] = useState(false);
  
  useEffect(() => {
    const consultarApi = async () => {
      let url = "";
      let resultado = "";

      //Si la busqueda es vacia busca por todos los becarios
      if (busqueda === "") {
        url = `https://guadaltech-fullstack.herokuapp.com/api/becarios`;
        const respuesta = await fetch(url);
        resultado = await respuesta.json();
        guardarError(false);
        guardaListadoBecarios(resultado);

        //si la busqueda no esta vacia busca por un solo usuario con el valor de la busqueda
      } else {
        url = `https://guadaltech-fullstack.herokuapp.com/api/becarios/${busqueda}`;
        const respuesta = await fetch(url);
        resultado = await respuesta.json();
        //si el resultado trae error undefined significa que existe el becario encontrado.
        if (resultado.error === undefined) {
          let array = [resultado];
          //lo guardamos en la lista de becarios 
          guardaListadoBecarios(array);
          guardarError(false);
        } else {
          //sino es igual undefined el error entonces no ha devuelto un becario y se debe limpiar la lista de becarios.
          guardaListadoBecarios([]);
          guardarError(true);
        }
      }
    };

    consultarApi();
  }, [busqueda]);


  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center"> Buscador de becarios</p>
        <Formulario guardarBusqueda={guardarBusqueda} error={error} />
        <Becarios
          listadoBecarios={listadoBecarios}
        />
      </div>
    </div>
  );
}

export default App;

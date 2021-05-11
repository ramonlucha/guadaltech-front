import React, { useState } from "react";
import Error from "./Error";
const Formulario = ({ guardarBusqueda, error }) => {

    //variable para recoger el becario que vayamos escribiendo en el campo de texto
  const [becario, guardarBecario] = useState("");
  //funcion que nos va a permitir en el onChange ir modificado el valor de becario cada vez que modifiquemos algo.
  const buscarBecario = (e) => {
    e.preventDefault();
    //guardamos el valor del becario 

    guardarBusqueda(becario.trim());
  };
  return (
    <form onSubmit={buscarBecario}>
      <div className="row">
        <div className="form-group col-md-8">
          <input
            type="text"
            className="form-control form-control-lg"
            placeholder="Busca por ID o vacio si desea una lista de todos los becarios"
            onChange={(e) => guardarBecario(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <input
            type="submit"
            className="btn btn-lg btn-danger btn-block"
            value="Buscar"
            
          />
        </div>
      </div>
      {error ? (
        <Error mensaje="Becario no encontrado con esos parámetros de búsqueda" />
      ) : null}
    </form>
  );
};

export default Formulario;

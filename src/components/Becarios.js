import React, { useState } from "react";

const Becarios = ({ listadoBecarios }) => {
 
  return (
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Nombre</th>
          <th scope="col">Apellidos</th>
          <th scope="col">Puesto</th>
          <th scope="col">Horario</th>
          <th scope="col">Fecha Alta</th>
        </tr>
      </thead>
      <tbody>
        {listadoBecarios.map((becario) => (
          <tr class="table-danger">
            <th scope="row">{becario.id}</th>
            <td>{becario.nombre}</td>
            <td>{becario.apellidos}</td>
            <td>{becario.puesto}</td>
            <td>{becario.horario}</td>
            <td>{becario.fechaalta}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Becarios;

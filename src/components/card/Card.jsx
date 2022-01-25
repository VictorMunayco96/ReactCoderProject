import React from 'react';
import ItemCount from '../itemCount/ItemCount';

const Card = (props) => {

   


  return <div className="col mb-5">
  <div className="card h-100">
    <img
      className="card-img-top"
      src="https://img-c.udemycdn.com/course/240x135/980450_7fc0_3.jpg"
      alt="..."
    />

    <div className="card-body p-4">
      <div className="text-center">
        <h5 className="fw-bolder">ASD</h5>

        <p>Dia: 123 </p>
        <p> Hora: 123</p>
        <p>Instructor: LOREM </p>
        <h5>Precio: 123.12 </h5>
        <p>Vacantes: {props.stock} </p>
        <ItemCount stock={props.stock}></ItemCount>
       
      
      </div>
    </div>

    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
      <div className="text-center">
        <a className="btn btn-outline-dark  mt-auto mb-2" href="/">
          Informacion
        </a>
        <a
          className="btn btn-success mt-auto mb-2"
          id="btncarro"
          value=""
         
          href="/"
        >
          Agregar
        </a>
      </div>
    </div>
  </div>
</div>;
};

export default Card;

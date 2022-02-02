import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

import "./ItemDetail.css";

const URL = "http://localhost:3001/productos";

const ItemDetail = () => {

  const [data, setData] = useState([]);


  useEffect(() => {

    fetch(URL)
      .then((response) => response.json())
      .then((json) =>  setData(json))
  }, []);





  const getProducts = () => {
    return new Promise((resolve) => {
       setTimeout(() => resolve(true), 2000);
     });
   };


   getProducts()
     .then((result) => {



        fetch(URL)
          .then((response) => response.json())
          .then((json) =>  setData(json));

          console.log("Imprimió");
        
      




     });


  



    return <div>

        <div className="ubicaHora">

          <div className="tituloUbica">
            <h2>{data[0].description}</h2>
          </div>

          <div className="ubicaMapa">
            <div>dasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdas</div>
          </div>

        </div>
      </div>;
  


    }
  
  


  export default ItemDetail;

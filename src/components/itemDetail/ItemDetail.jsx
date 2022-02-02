import { render } from '@testing-library/react';
import React, { useEffect, useState } from 'react';

import "./ItemDetail.css";

const URL = "http://localhost:3001/productos";

const ItemDetail = () => {

  const [data, setData] = useState([]);







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

        
      




     });


  



    return <div>

        <div className="ubicaHora">

          <div className="tituloUbica">
            {(data.length>0)? <h2>{data[0].descripcion} </h2>:null}
          </div>

          <div className="ubicaMapa">
          {(data.length>0)? <h2>PRECIO: {data[0].precio} </h2>:null}
          </div>

        </div>
      </div>;
  


    }
  
  


  export default ItemDetail;

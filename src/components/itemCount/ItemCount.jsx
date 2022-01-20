import React from 'react';
import './ItemCount.css';

const ItemCount = () => {

    const [cont, setCont]= React.useState(0);

    let disminuir= ()=> setCont(cont-1);


  return  <div> 
            <button className="btn btn-info espacio" onClick={function disminuir(){
           if(cont>0)
            setCont(cont - 1);
            }}> - </button>

            <label className="espacio" > {cont} </label>

            <button className="btn btn-info espacio" onClick={function aumentar(){

            
            setCont(cont + 1);

            }}> + </button>
            </div>;
};

export default ItemCount;

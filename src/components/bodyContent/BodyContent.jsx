import { useEffect, useState } from "react";
import React from "react";
import Card from "../card/Card";
import './BodyContent.css';

const BodyContent = () => {



  let [products, setCont] = React.useState([]);

  

 


     const getProducts = () => {
        return new Promise((resolve) => {
           setTimeout(() => resolve(true), 2000);
         });
       };

   
       getProducts()
         .then((result) => {

console.log("Funciona los 2 Segundos")

setCont([
  {
       "id": 1,
       "imagen": "https://img-c.udemycdn.com/course/240x135/980450_7fc0_3.jpg",
       "descripcion": "Laravel",
       "dia": "22/03/2021",
       "hora": "20:00hr",
       "instructor": "Carmen Salvador Lopez",
       "precio": 200,
       "stock" : 16
     },
     {
       "id": 2,
       "imagen": "https://img-c.udemycdn.com/course/240x135/1337000_0d99.jpg",
       "descripcion": "Programacion PHP",
       "dia": "22/03/2021",
       "hora": "20:00hr",
       "instructor": "Carmen Salvador Lopez",
       "precio": 250,
       "stock" : 13
     },
     {
       "id": 3,
       "imagen": "https://img-c.udemycdn.com/course/240x135/1606018_069c.jpg",
       "descripcion": "Inteligencia Artificial",
       "dia": "22/03/2021",
       "hora": "20:00hr",
       "instructor": "Carmen Salvador Lopez",
       "precio": 180,
       "stock" : 18
     },
     {
       "id": 4,
       "imagen": "https://img-c.udemycdn.com/course/240x135/371090_f92b_6.jpg",
       "descripcion": "Programacion Movil",
       "dia": "22/03/2021",
       "hora": "20:00hr",
       "instructor": "Carmen Salvador Lopez",
       "precio": 210,
       "stock" : 10
     },
     {
       "id": 5,
       "imagen": "https://img-c.udemycdn.com/course/240x135/2088520_5480.jpg",
       "descripcion": "IONIC",
       "dia": "22/03/2021",
       "hora": "20:00hr",
       "instructor": "Carmen Salvador Lopez",
       "precio": 130,
       "stock" : 9
     },
     {
       "id": 6,
       "imagen": "https://img-c.udemycdn.com/course/240x135/2069857_a16d_15.jpg",
       "descripcion": "PServidores",
       "dia": "22/03/2021",
       "hora": "20:00hr",
       "instructor": "Carmen Salvador Lopez",
       "precio": 270,
       "stock" : 10
     },
     {
       "id": 7,
       "imagen": "https://img-c.udemycdn.com/course/240x135/2306140_8181.jpg",
       "descripcion": "Flutter",
       "dia": "22/03/2021",
       "hora": "20:00hr",
       "instructor": "Carmen Salvador Lopez",
       "precio": 200,
       "stock" : 15
     },
     {
       "id": 8,
       "imagen": "https://img-c.udemycdn.com/course/240x135/782428_b5cf_4.jpg",
       "descripcion": "Wordpress",
       "dia": "22/03/2021",
       "hora": "20:00hr",
       "instructor": "Carmen Salvador Lopez",
       "precio": 200,
       "stock" : 20
     }
   ])
         });
       
   

  return (
    <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
        <div
          id="cards"
          className="
            row
            gx-4 gx-lg-5
            row-cols-2 row-cols-md-3 row-cols-xl-4
            justify-content-center
          "
        >




  
  {



    products.map((item=>(

<Card url={item.imagen} nomcurso={item.descripcion} dia={item.dia} hora={item.hora} instructor={item.instructor} monto={item.precio} stock={item.stock}/>
)))


 


}
    



        </div>
        </div>
    </section>
  );
};

export default BodyContent;

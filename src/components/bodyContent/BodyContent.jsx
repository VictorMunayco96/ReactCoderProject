import React from "react";
import Card from "../card/Card";
import './BodyContent.css';

const BodyContent = () => {

const [cont, setCont]= React.useState(0);

let disminuir= ()=> setCont(cont-1);


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

        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
        </div>
    </section>
  );
};

export default BodyContent;

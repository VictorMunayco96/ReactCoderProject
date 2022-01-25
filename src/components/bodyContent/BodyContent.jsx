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

        <Card stock='25'></Card>
        <Card stock='10'></Card>
        <Card stock='5'></Card>
        <Card stock='26'></Card>
        <Card stock='7'></Card>
        <Card stock='3'></Card>
        <Card stock='8'></Card>
        <Card stock='9'></Card>
        </div>
        </div>
    </section>
  );
};

export default BodyContent;

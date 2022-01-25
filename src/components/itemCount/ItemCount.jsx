import React from "react";
import "./ItemCount.css";

const ItemCount = (props) => {
  const [cont, setCont] = React.useState(0);

  let disminuir = () => setCont(cont - 1);

  return (
    <div>
      <button
        className="btn btn-info espacio"
        onClick={function disminuir() {
          if (cont > 0) setCont(cont - 1);
        }}
      >
        {" "}
        -{" "}
      </button>

      <label className="espacio"> {cont} </label>

      <button
        className="btn btn-info espacio"
        onClick={function aumentar() {


          if (cont == props.stock) {
              alert("Se ha llegado al límite de vacantes");
              return;
            }

          if (cont < parseInt(props.stock)){
          setCont(cont + 1);
        }
        }}
      >
        {" "}
        +{" "}
      </button>
    </div>
  );
};

export default ItemCount;

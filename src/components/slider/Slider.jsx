import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.expertopyme.com/wp-content/uploads/Experto-Pyme-Cursos-en-linea-sobre-ventas.jpg"
            className="d-block w-100"
            alt="..."
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;

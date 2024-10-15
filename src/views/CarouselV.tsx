import React from "react";
import CarouselC from "../components/CarouselC";

const CarouselF: React.FC = () => {
  return (
    <div className="carousel-container">
        <div className="half-circle"></div>
        <div className="carousel-upper-text">
            <div className="grid-container">
                <div className="item2">
                        <div className="subtitle-container">
                            <p className="p-text">Comprá <b>bitcoin</b> y otras <br></br>
                                criptos <b>fácilmente</b>
                            </p>
                        </div> 

                </div>
                <div className="item2">
                    <p className="p-item" style={{maxWidth:'120%'}}>Invertí de forma segura en los activos con <br></br>
                        mejor rendimiento de la década a través de <br></br>
                                una plataforma regulada</p>
                </div>
            </div>
        </div>

        <CarouselC/>
        <p className="p-item-bottom">
        Depositá pesos y comprá dólar cripto con el mejor tipo de cambio y el <br></br>
        spread más bajo.
        </p>
        
    </div>
  );
};

export default CarouselF;
import React from "react";
import './Proyects.css'

function ShowProyects() {
    return (
        <div id="proyectos" className="info">
            <h2>PROYECTOS</h2>

            <div>
                <h3>Filtro aqui</h3>
                <div className="proyects-section">
                    <div className="proyect">
                        <img
                            src="https://dummyimage.com/250/ffffff/000000"
                            alt="thumbnail del proyecto"
                        />
                        <h4>API Restful con NodeJS</h4>
                    </div>
                    <div className="proyect">
                        <img
                            src="https://dummyimage.com/600x250/ffffff/000000"
                            alt="thumbnail del proyecto"
                        />
                        <h4>App-web monolitica con DJango</h4>
                    </div>
                    <div className="proyect">
                        <img
                            src="https://dummyimage.com/250/ffffff/000000"
                            alt="thumbnail del proyecto"
                        />
                        <h4>interfaz grafica para api con REACT</h4>
                    </div>
                    <div className="proyect">
                        <img
                            src="https://dummyimage.com/250/ffffff/000000"
                            alt="thumbnail del proyecto"
                        />
                        <h4>App movil de preguntados o uber de mototaxis</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowProyects
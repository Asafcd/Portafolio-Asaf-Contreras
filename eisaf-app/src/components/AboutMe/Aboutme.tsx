import React from "react";
import './Aboutme.css'

function Aboutme() {

    return (
        <div id="about">
            <h2>UN POCO SOBRE MÍ</h2>

            <div className="my-info">
                <div className="card-info">
                    
                        <p>
                            Durante mi vida, el trabajo me ha permitido desarrollar y reforzar habilidades de:
                        </p>
                        <br/>
                        <ul>
                            <li> Liderazgo</li>
                            <li> Trabajo en equipo, bajo presión y de aprendizaje rapido</li>
                            <li> Uso de sentido comun</li>
                            <li> Resolucion de problemas</li>
                            <li> Administracion de tiempos y optimizacion de recursos</li>
                        </ul> 

                </div>

                <div className="card-info">
                    <strong>
                        <ul>
                            <li>
                                Actualmente soy estudiante de 6° semestre de Ing. en Desarrollo de
                                Tecnologías y Software
                            </li>
                            <br/>
                            <li>
                                Cuento con mas de 1 año de expriencia laboral en
                                desarrollo Web.
                            </li>
                            <br/>
                            <li>
                                Como parte de mi formación, he desarrollado
                                multiples proyectos con fines educativos y demostrativos; en este
                                sitio se pueden encontrar algunos de ellos.
                            </li>

                        </ul>
                    </strong>
                </div>
            </div>
        </div>

    )
}
export default Aboutme
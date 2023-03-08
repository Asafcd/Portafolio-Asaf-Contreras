import React from "react";
import './Skills.css'

function Skills() {
    return (
        <div id="skills" className="info">
            <div className="info-header">
                <h2>HABILIDADES</h2>
            </div>
            <div className="info-section">
                <div className="info-section-child">
                    <div className="child">
                        <h3>Desarrollo Web</h3>
                        <br />
                        <div>
                            <p>
                                Tengo experiencia en el desarrollo App-Web monoliticas, de
                                API's RESTful y en la construccion de una interfaz grafica
                                personalizada para la gestion de datos y logica de negocio.
                            </p>

                            <p>

                                He trabajado con NodeJS durante un año suguiendo el Modelo
                                Vista Controlador y la artquitectura RESTful.
                            </p>
                        </div>
                    </div>
                    <div className="child">
                        <h3>Desarrollo Movil</h3>
                        <br />
                        <div>
                            <p>
                                Tengo experiencia en el desarrollo App-Web monoliticas, de
                                API's RESTful y en la construccion de una interfaz grafica
                                personalizada para la gestion de datos y logica de negocio.
                            </p>

                            <p>

                                He trabajado con NodeJS durante un año suguiendo el Modelo
                                Vista Controlador y la artquitectura RESTful.
                            </p>
                        </div>
                    </div>
                    <div className="child">
                        <h3>Bases de datos</h3>
                        <br />
                        <div>
                            <p>
                                Tengo experiencia en el desarrollo App-Web monoliticas, de
                                API's RESTful y en la construccion de una interfaz grafica
                                personalizada para la gestion de datos y logica de negocio.
                            </p>

                            <p>

                                He trabajado con NodeJS durante un año suguiendo el Modelo
                                Vista Controlador y la artquitectura RESTful.
                            </p>
                        </div>
                    </div>
                    <div className="child">
                        <h3>Servicios de la nube</h3>
                        <br />
                        <div>
                            <p>
                                Tengo experiencia en el desarrollo App-Web monoliticas, de
                                API's RESTful y en la construccion de una interfaz grafica
                                personalizada para la gestion de datos y logica de negocio.
                            </p>

                            <p>
                                {" "}
                                He trabajado con NodeJS durante un año suguiendo el Modelo
                                Vista Controlador y la artquitectura RESTful.{" "}
                            </p>
                        </div>
                    </div>
                </div>
                <ul className="grafica-section">
                    <li>
                        <img className="responsive" src="Web.png" alt="grafica" />
                    </li>
                    <li>30 - Avanzado</li>
                    <li>20 - Intermedio</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills
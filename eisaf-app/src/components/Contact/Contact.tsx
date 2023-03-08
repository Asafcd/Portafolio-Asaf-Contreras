import React from "react";
import './Contact.css'

function Contactme() {
  return (
    <div id="contacto">
      <div className="card">
        <div className="large-round">
          <figure className="small-round">
            <img
              src="https://img.freepik.com/vector-gratis/hacker-que-opera-ilustracion-icono-historieta-ordenador-portatil-concepto-icono-tecnologia-aislado-estilo-dibujos-animados-plana_138676-2387.jpg?w=500"
              alt="foto de perfil"
              className="responsive"
            />
          </figure>
        </div>

        <div className="card-body">
          <div className="fullname">
            <h2>ASAF CONTRERAS</h2>
            <p>Software Developer</p>
            <p>asafcontreras@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contactme
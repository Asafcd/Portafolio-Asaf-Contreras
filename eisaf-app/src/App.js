
import "./App.css";

function App() {

  const pStyle = {
    color: 'white'
  }

  return (
    <div className="App">
      <header>
        <nav class="nav-wrapper">
          <div class="figure-logo">
            <h1 class="brand-logo">ASAF</h1>
          </div>

          <ul id="nav-mobile" class="nav-options">
            <li>
              <a href="index.html">INICIO</a>
            </li>
            <li>
              <a href="index.html">PROYECTOS</a>
            </li>
            <li>
              <a href="index.html">CURRICULUM</a>
            </li>
            <li>
              <a href="index.html">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </header>

      <div id="contacto">
        <div class="card">
          <div class="large-round">
            <figure class="small-round">
              <img
                src="https://img.freepik.com/vector-gratis/hacker-que-opera-ilustracion-icono-historieta-ordenador-portatil-concepto-icono-tecnologia-aislado-estilo-dibujos-animados-plana_138676-2387.jpg?w=500"
                alt="foto de perfil"
                class="responsive"
              />
            </figure>
          </div>

          <div class="card-body">
            <div class="fullname">
              <h2>ASAF CONTRERAS</h2>
              <p>Software eveloper</p>
              <p>asafcontreras@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div id="about">
        <h2>SOBRE MÍ</h2>
        <div class="my-info">
          <p style={pStyle}>
            He trabajado distintas areas de la industria de alimentos, venta de
            productos, atención al cliente, transporte particular y he
            emprendido por mi cuenta. Esta experiencia me ha permitido
            desarrollar y reforzar habilidades de liderazgo, trabajo en equipo,
            bajo presión y de aprendizaje rapido, uso de sentido comun,
            resolucion de problemas, administración de tiempos y optmización de
            recursos.
          </p>
          <br />
          <strong>
            <p>
              Actualmente soy estudiante de 6° semestre de Ing. en Desarrollo de
              Tecnologías y Software, con 1 año de expriencia laboral en
              desarrollo Web. Como parte de mi formación, he desarrollado
              multiples proyectos con fines educativos y demostrativos; en este
              sitio se pueden encontrar algunos de ellos.
            </p>
          </strong>
        </div>
      </div>

      <hr />
      <div id="skills" class="info">
        <div class="info-header">
          <h2>HABILIDADES</h2>
        </div>
        <div class="info-section">
          <div class="info-section-child">
            <div class="child">
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
            <div class="child">
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
            <div class="child">
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
            <div class="child">
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
          <ul class="grafica-section">
            <li>
              <img class="responsive" src="Web.png" alt="grafica" />
            </li>
            <li>30 - Avanzado</li>
            <li>20 - Intermedio</li>
          </ul>
        </div>
      </div>

      <hr />
      <div id="proyectos" class="info">
        <h2>PROYECTOS</h2>

        <div>
          <h3>Filtro aqui</h3>
          <div class="proyects-section">
            <div class="proyect">
              <img
                src="https://dummyimage.com/250/ffffff/000000"
                alt="thumbnail del proyecto"
              />
              <h4>API Restful con NodeJS</h4>
            </div>
            <div class="proyect">
              <img
                src="https://dummyimage.com/600x250/ffffff/000000"
                alt="thumbnail del proyecto"
              />
              <h4>App-web monolitica con DJango</h4>
            </div>
            <div class="proyect">
              <img
                src="https://dummyimage.com/600x300/ffffff/000000"
                alt="thumbnail del proyecto"
              />
              <h4>interfaz grafica para api con REACT</h4>
            </div>
            <div class="proyect">
              <img
                src="https://dummyimage.com/250/ffffff/000000"
                alt="thumbnail del proyecto"
              />
              <h4>App movil de preguntados o uber de mototaxis</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

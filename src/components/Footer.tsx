import React from 'react';

import logo from '../assets/Images/logo.png';

const Footer: React.FC = () => {
  return (
    <div className="container" style={{ maxWidth: '1400px' }}>
      <footer className="mt-5 " style={{ color: 'aliceblue' }}>
        <div className="row">
        
          <div className="col-md-8" style={{ color: 'aliceblue', maxWidth:'60%', fontWeight: 'bold' }}>
            <p>
              The Badger Technology Company Limited - Proveedor de Servicios de Activos Virtuales (PSAV)<br></br>
               inscripto bajo el N° -- de fecha -- de ----- de ----- en el Registro de Proveedores de Servicios de <br></br>
                Activos Virtuales de CNV. Este registro es a los fines del control como Sujeto Obligado ante la <br></br> 
                Unidad de Información Financiera (UIF) y de todo otro ente regulador facultado a tal efecto, en <br></br> 
                el marco de sus competencias, y no implica licencia ni supervisión por parte de la COMISIÓN <br></br>
                NACIONAL DE VALORES sobre la actividad realizada por el PSAV.
            </p>
          </div>


          <div className="col-md-4 d-flex flex-column align-items-center">
           
            <div className="d-flex align-items-center mt-5">
              <img
                src={logo}
                alt="Logo"
                style={{ maxHeight: '50px', marginBottom:'3px' }}
              />
              <span style={{ fontSize: '1.5em', fontWeight: 'bold', color: 'aliceblue' }}>CryptoWeb</span>
            </div>

         
            <div className="d-flex align-items-center">
              <strong style={{ color: 'aliceblue', marginRight: '10px' }}>Seguinos</strong>
              <a href="#" className="nav-link px-2" style={{ color: 'gray' }}>Facebook</a>
              <a href="#" className="nav-link px-2" style={{ color: 'gray' }}>Instagram</a>
              <a href="#" className="nav-link px-2" style={{ color: 'gray' }}>Linkedin</a>
            </div>
          </div>
        </div>

        
        <ul className="nav justify-content-center border-bottom my-3"></ul>

        <ul className="nav justify-content-center mt-3">
          <li className="nav-item">
            <a href="#" className="nav-link px-2" style={{ color: 'gray' }}>Políticas de privacidad</a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link px-2" style={{ color: 'gray' }}>Términos de uso</a>
          </li>
        </ul>

    
        <p className="text-center" style={{ color: 'gray', fontSize: '12px' }}>&copy; 2024 CriptoWeb. Todos los derechos reservados</p>
      </footer>
    </div>
  );
};

export default Footer;
import React from 'react';
import phone from '../assets/Images/phone.png'
import Circle from '../components/Circle';
import appStoreLogo from '../assets/Images/appStoreLogo.png'
import googlePlayLogo from '../assets/Images/googlePlayLogo.png'


const Home: React.FC = () => {
  return <div className='home-container'>
    <div className='text-container'>
        <p> Con <b className='boldCB'>CriptoWeb</b> maneja <br></br> 
            tu dinero y recibí<br></br> 
        pagos internacionales <b className='boldCB'>gratis</b>
        </p>
    </div>
    <div className='circle-container'>
    <Circle top="25%" left="27%" size="60px" />
    <Circle top="80%" left="30%" size="60px" />
    <Circle top="95%" left="70%" size="50px" />
    <Circle top="45%" left="65%" size="60px" />
    <Circle top="25%" left="70%" size="60px" />

    </div>
    
<div className="store-buttons">

    <a className="store-button google-play" href="#">
      <img src={googlePlayLogo} alt="Google Play"></img>
    </a>


    <a className="store-button app-store" href="#">
      <img src={appStoreLogo} alt="App Store"></img>
    </a>
  </div>
    

    <div className='phone-container'>
        <div className='circle-phone'></div>
        <img className="phone-image" src={phone} alt="Celular"></img>
    </div>
    </div>;
};

export default Home;
// import logo from '../.jpg';
import logo from '../img/dog.png';
import './components.css';

function PhotoProfile() {
   return ( 
         <img className='photoProfile' src={logo} alt="" />
    );
}

export default PhotoProfile;
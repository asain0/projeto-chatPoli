import PhotoProfile from './PhotoProfile';
import whatsapp_icon from '../img/whatsapp_.svg'
import {FiUser} from "react-icons/fi";

import './atendimento.css'

function Atendimento({atendimento}) {
   console.log(atendimento);
   return ( 
      <div className="card">
         <div className="card_photo">
            <PhotoProfile/>
         </div>

         <div className="card__data">

            <div className="card__client">
               <span className="card__client__name">{atendimento.user}</span>
               <div className="card__client_origin">
                  <span>{atendimento.lastContact}</span>
                  <img className="card__client__origin__app" src={whatsapp_icon} alt="origem da mensagem" />
               </div>
            </div>

            <div className="card_lastMessage">
               {atendimento.lastMessage}
            </div>

            <div className="card__attendant">
               <FiUser/>
               <span>{atendimento.attendant}</span>
               {/* <span> oooooooooo</span> */}
            </div>

         </div>
      </div>
    );
}

export default Atendimento;
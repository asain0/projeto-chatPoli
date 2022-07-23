import './ChatKeyboard.css';
import { FaWhatsappSquare, FaRocket, FaSmile, FaBook } from "react-icons/fa";
import {RiSendPlaneFill } from "react-icons/ri";
import {BsFillMicMuteFill, BsPaperclip } from "react-icons/bs";
import {MdTextFields } from "react-icons/md";
import {ImMobile} from "react-icons/im";
import whatsapp_icon from '../img/whatsapp_.svg'


function ChatKeyboard() {
   return ( 
      
   <div className="chat__keyboard">
      <div className="chat__keyboard__draft">
            {/* <FaWhatsappSquare/> */}
            <img src={whatsapp_icon} alt="" />
         <textarea name="draft" id="" cols="30" rows="5">aaa</textarea>
      </div>

      <div className="chat__keyboard_configs">
         <div className="chat__keyboard__configs__escrita">
            <button><MdTextFields/></button>
              <button>
               <ImMobile/>
               </button> 
         </div>
         <div className="chat__keyboard__configs__actions">
            <button className="icons_asain_livro"><FaBook/></button>
            <button className="icons_asain_clip"><BsPaperclip/></button>
            <button className="icons_asain_rocket">
            <FaRocket/>
               </button>
            <button className="icons_asain_emoticon"><FaSmile/></button>
            <button className="icons_asain_mic"><BsFillMicMuteFill/></button>
            <button className="icons_asain_sendmessage"><RiSendPlaneFill/></button>
         </div>
      </div>
   </div>
    );
}

export default ChatKeyboard;
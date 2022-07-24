import {GoMail} from "react-icons/go";
import {CgProfile} from "react-icons/cg";
import {FiFilter} from "react-icons/fi";
import {BsChatDots} from "react-icons/bs";
import {IoIosChatbubbles} from "react-icons/io";

import Atendimento from "./Atendimento";
import Polibutton from "./Polibutton";

import "./chatControl.css"

function ChatControl() {

   const atendimentos = [
      {  
         id: 0,
         photoPath: 'c:',
         user:'Jalisson...',
         lastContact: '2022-01-15 : 13:35:00',
         lastMessage: 'Estamos tentando ajudar...',
         attendant: 'Gustavo'
      },
      {  
         id: 1,
         photoPath: 'c:',
         user:'Gabriel Hen...',
         lastContact: '2022-04-25 : 13:35:00',
         lastMessage: 'Oi',
         attendant: 'Gabriel Henrique'
      },
      {  
         id: 1,
         photoPath: 'c:',
         user:'Gabriel Hen...',
         lastContact: '2022-04-25 : 13:35:00',
         lastMessage: 'Oi',
         attendant: 'Gabriel Henrique'
      },
      {  
         id: 1,
         photoPath: 'c:',
         user:'Gabriel Hen...',
         lastContact: '2022-04-25 : 13:35:00',
         lastMessage: 'Oi',
         attendant: 'Gabriel Henrique'
      },
      {  
         id: 1,
         photoPath: 'c:',
         user:'Gabriel Hen...',
         lastContact: '2022-04-25 : 13:35:00',
         lastMessage: 'Oi',
         attendant: 'Gabriel Henrique'
      },
      {  
         id: 1,
         photoPath: 'c:',
         user:'Gabriel Hen...',
         lastContact: '2022-04-25 : 13:35:00',
         lastMessage: 'Oi',
         attendant: 'Gabriel Henrique'
      }
      
   ];
   return ( 
      <div className="chatControl">

         <div className="chatControl__menu">
            <Polibutton container='chatControl__menu_itens' icone={<IoIosChatbubbles/>}/>
            <Polibutton container='chatControl__menu_itens' icone={<BsChatDots/>}/>
            <Polibutton container='chatControl__menu_itens' icone={<GoMail/>}/>
         </div>

         <div className="chatControl__search">
            <input type="text" />
            <button><CgProfile/></button>
            <button><FiFilter/></button>
         </div>
            <hr />
         <div className="chatControl__archive">
            {
               atendimentos.map(atendimento => <Atendimento atendimento={atendimento}/>)
            }
            
            
         </div>
      </div>
    );
}

export default ChatControl;
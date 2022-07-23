import PhotoProfile from "./PhotoProfile";
import './ChatHeader.css'
function ChatHeader() {
   return ( 
      <div className="chat__header">

         <div className="chat__header__client">
            <PhotoProfile/>
            <div className="chat__header__client__Name">Gabriel Henrique</div>
         </div>

         <div className="chat__header__atendente">
            <PhotoProfile/>
            <a href="#" className="chat__header__atendente__menu">...</a>
         </div>

      </div>
    );
}

export default ChatHeader;
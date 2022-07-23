import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages.jsx';
import ChatKeyboard from './ChatKeyboard.jsx';

import './Chat.css';

function Chat() {
   return ( 
      <div className="chat">
          <ChatHeader/>
         <ChatMessages></ChatMessages>
         <ChatKeyboard></ChatKeyboard>

      </div>
    );
}

export default Chat;

import ChatControl from '../components/ChatControl';
import Chat from '../components/Chat';
import './ChatSection.css'
function ChatSection() {
   return ( 
         <section className='chatSection'>
            <ChatControl/>
            <Chat />
         </section>
    );
}

export default ChatSection;
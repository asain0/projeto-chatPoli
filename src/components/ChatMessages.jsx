import PhotoProfile from './PhotoProfile'

import './ChatMessages.css'

function ChatMessages() {
   //   const usuarios = [{
   //    id: 0,
   //    nome: 'Anderson',
   //    tipo: 'Atendente',
   //    foto: '../img/dog.png'
   //   },
   //   {
   //    id: 1,
   //    nome: 'Leandro',
   //    tipo: 'Cliente',
   //    foto: '../img/husky.png'
   //   }
   // ];
   const mensagens = [
      {
         userId:0,
         time:'2022-01-01 07:05:59',
         message:'Feliz Ano novo!',
         chanel: 'whatsapp'
      },
      {
         userId:0,
         time:'2022-01-01 07:06:09',
         message:'Que esse anos seja de muitas vitórias na sua vida!',
         chanel: 'whatsapp'
      },
      {
         userId:1,
         time:'2022-01-01 07:10:01',
         message:'Bom dia! Feliz ano novo também!',
         chanel: 'whatsapp'
      },
      {
         userId:1,
         time:'2022-01-01 07:11:59',
         message:'Estão todos bem por ai?',
         chanel: 'whatsapp'
      },
      {
         userId:0,
         time:'2022-01-01 07:15:13',
         message:'Estão sim. Anima de almoçar lá no Jalisson hoje?',
         chanel: 'whatsapp'
      },
   ]
   return ( 
      <div className="chatMessages">
         {mensagens.map(mensagem => (
            <div className={ mensagem.userId ===0?'chatMessages__interaction self__message': 'chatMessages__interaction others__message'
            }>
               <PhotoProfile/>
               <div className="chatMessages__interaction_message">
                  <div>{mensagem.message}</div>
                  <div className='chatMessages__interaction_message__time'>{mensagem.time}</div>
               </div>
            </div>
         ))}
      </div>
    );
}

export default ChatMessages;
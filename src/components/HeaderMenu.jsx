import logo_poli from '../img/logo_poli_digital.svg'
import polichat from '../img/polichat.svg'
import chanels from '../img/conectteste.svg'
import {RiComputerLine} from 'react-icons/ri';
import {BiWorld} from 'react-icons/bi';
import {GiBugleCall} from 'react-icons/gi';
import {BsWhatsapp} from 'react-icons/bs';

import ThemeSelector from './ThemeSelector'
import PoliSelect from './Poliselect.jsx'

import './HeaderMenu.css'

function HeaderMenu() {
   const departamentos = [{
      idDpto:0,
      nome:'Poli'
   },
   {
      idDpto:1,
      nome:'Asain'
   }
]

   const canais =[
      {
         idCanal: 0,
         nome: 'SDR0001'
      },
      {
         idCanal: 1,
         nome: 'SDR0002'
      },
      {
         idCanal: 0,
         nome: 'SDR0003'
      }
   ]
   return ( 
      <nav className='headerMenu'>
         <a className="headerMenu__logo" href="https://polichat.com.br/" >
            <img  src={logo_poli} alt="" />
         </a>
         <div className="statusbar">
            <img className='polichat' src={polichat} alt="" />

            <div className="statusbar__depto">
               <PoliSelect itens={departamentos}/>
            </div>

            <div className="statusbar__whatsapp">
               <BsWhatsapp/>
            </div>

            <div className='PoliSelect less' name="" id="">
               <PoliSelect itens={canais}/>
            </div>

            {/* <select className='PoliSelect less' name="" id="">
               <option value="">
                  <div className="statusbar__canal">
                     <div className="statusbar__canal__info">
                        <div className="statusbar__canal__info__nome">
                           <span>Canal Canal ADR 0001</span>
                        </div>
                        <div className="statusbar__canal__info__calls">
                           <span className="statusbar__canal__info__calls__current">90</span>
                           <span className="statusbar__canal__info__calls__goal">/1000</span>
                           <span className="statusbar__canal__info__calls__medida">Contatos-dia</span>
                        </div>
                     </div>
                  </div>
               </option>
            </select> */}
            
            <div className="statusbar__promo">
               <button className="statusbar__promo__button">Indique e ganhe</button>
            </div>
            <div className="statusbar__chanels">
               <img src={chanels} alt="" />
            </div>
            <div className="statusbar__remoteAccess">
               <RiComputerLine/>
            </div>

            <div className="statusbar__InternetConnection"><BiWorld/></div>
            <div className="statusbar__autofalante"><GiBugleCall/></div>
            <div className="statusbar__theme">
                  <ThemeSelector/>
            </div>

         </div>
      
      </nav>
    );
}

export default HeaderMenu;
import logo_poli from '../img/logo_poli_digital.svg'
import polichat from '../img/polichat.svg'
import chanels from '../img/conectteste.svg'
import {RiComputerLine} from 'react-icons/ri';
import {BiWorld} from 'react-icons/bi';
import {GiBugleCall} from 'react-icons/gi';
import {BsWhatsapp} from 'react-icons/bs';
import {AiOutlineMenu} from 'react-icons/ai';

import ThemeSelector from './ThemeSelector'
import PoliSelect from './Poliselect.jsx'

import './HeaderMenu.css'
import Polibutton from './Polibutton';

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


         <div className="headerMenu_statusbar">

            <input type="checkbox" className='headerMenu_statusbar__checkMenuMobile' name="menuHeader" id="menuHeader" />
            
            <img className='statusbar__polichat' src={polichat} alt="" />

            <div className="statusbar__accessConfig">
               
               <div className="statusbar__depto">
                  <PoliSelect itens={departamentos}/>
               </div>

               <div className="statusbar__whatsapp fullScreen">
                  <BsWhatsapp/>
               </div>

               <div className='poliSelect' name="" id="">
                  <PoliSelect itens={canais}/>
               </div>
            </div>

            <ul className='statusbar__actions fullScreen'>
               <li>
                  <div className="statusbar__promo fullScreen">
                     <button className="statusbar__promo__button">Indique e ganhe</button>
                  </div>
               </li>
               <li>
                  <div className="statusbar__chanels fullScreen">
                     <img src={chanels} alt="" />
                  </div>
               </li>
               <li>
                  <div className="statusbar__remoteAccess fullScreen">
                  {/* <Polibutton icone={<RiComputerLine/>} container='statusbar__remoteAccess'/> */}
                     <RiComputerLine/>
                  </div>
               </li>
               <li>
                  <div className="statusbar__InternetConnection fullScreen"><BiWorld/></div>
               </li>
               <li>
                  <div className="statusbar__autofalante fullScreen"><GiBugleCall/></div>
               </li>
               <li>
                  <div className="statusbar__theme fullScreen"><ThemeSelector/>    </div>
               </li>
            </ul>

            <label htmlFor="menuHeader" className='headerMenu_statusbar__menuMobile'><AiOutlineMenu/></label>

         </div>
      
      </nav>
    );
   }

export default HeaderMenu;
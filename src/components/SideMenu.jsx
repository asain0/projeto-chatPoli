import './SideMenu.css'

import {IoIosChatbubbles, IoMdHelpCircleOutline } from "react-icons/io";
import {IoHomeSharp,IoBuildOutline} from "react-icons/io5";
import {VscGraphLine } from "react-icons/vsc";
import {BiBuildingHouse} from "react-icons/bi";
import {BsGear} from "react-icons/bs";
import {MdAttachMoney } from "react-icons/md";

function SideMenu() {
   return ( 
      <div className='x'>
         {/* <div className="parte1"> */}
            <ul className="parte1">
               <li>
                     <IoHomeSharp/>
                  </li>
               <li><IoIosChatbubbles/></li>
               <li><VscGraphLine/></li>
               <li><BiBuildingHouse/></li>
               <li><BsGear/></li>
               <li><MdAttachMoney/></li>
               <li><IoBuildOutline/></li>
            </ul>

         <div className="parte2">
            <div className="help"><IoMdHelpCircleOutline/></div>
            <div className="user">GH</div>
            <div className="version">
               <span className='version__tittle'>
                  Versão:
               </span>
               <span className='version__number'>
                  v0.15.182
               </span>
               </div>
         </div>
      </div>
    );
}

export default SideMenu;
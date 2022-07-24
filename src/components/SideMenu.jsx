import {IoIosChatbubbles, IoMdHelpCircleOutline } from "react-icons/io";
import {IoHomeSharp,IoBuildOutline} from "react-icons/io5";
import {VscGraphLine } from "react-icons/vsc";
import {BiBuildingHouse} from "react-icons/bi";
import {BsGear} from "react-icons/bs";
import {MdAttachMoney } from "react-icons/md";
import Polibutton from './Polibutton';

import './SideMenu.css'

function SideMenu() {
   return ( 
      <div className='sideMenu'>
            <ul className="sideMenu__pages">
               <li>
                  <Polibutton container='sideMenu__pages' icone={
                     <IoHomeSharp/>                  }/>
               </li>
               <li>
                  <Polibutton container='sideMenu__pages' icone={
                     <IoIosChatbubbles/>                  }/>               
               </li>
               <li>
                  <Polibutton container='sideMenu__pages' icone={
                     <VscGraphLine/>                  }/>               
               </li>
               <li>
                  <Polibutton container='sideMenu__pages' icone={
                     <BiBuildingHouse/>                  }/>
               </li>
               <li>
                  <Polibutton container='sideMenu__pages' icone={
                     <BsGear/>                  }/>
               </li>
               <li>
                  <Polibutton container='sideMenu__pages' icone={
                     <MdAttachMoney/>                  }/>
               </li>
               <li>
                  <Polibutton container='sideMenu__pages' icone={
                     <IoBuildOutline/>                  }/>
               </li>
            </ul>

         <div className="sideMenu__info">
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
import ChatControl from '../components/ChatControl';
import SideMenu from '../components/SideMenu'
import ChatSection from '../components/ChatSection'

import './Workbench.css';

function Workbench() {
   return ( 
      <main>
         <SideMenu/>
         <ChatSection/>
      </main>
    );
}

export default Workbench;
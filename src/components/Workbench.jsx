// import ChatControl from '../components/ChatControl';
import SideMenu from '../components/SideMenu'
import ChatSection from '../components/ChatSection'

import './Workbench.css';

function Workbench() {
   return ( 
      <main className='Workbench'>
         <SideMenu/>
         <ChatSection/>
      </main>
    );
}

export default Workbench;
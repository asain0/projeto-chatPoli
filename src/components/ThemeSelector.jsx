import './ThemeSelector.css'
import {BsFillSunFill,BsFillMoonStarsFill} from 'react-icons/bs';

function ThemeSelector() {
   return ( 
      <div className="theme">
         <div className="statusbar__theme__light"><BsFillSunFill/></div>
                  
         <input type="checkbox" name="ck__theme" className='ck__theme' id="theme" />
         <label className='ck__theme_painel' htmlFor="theme">
            <div className="ball"></div>
         </label>
         <div className="statusbar__theme__dark"><BsFillMoonStarsFill/></div>

      </div>
    );
}

export default ThemeSelector;
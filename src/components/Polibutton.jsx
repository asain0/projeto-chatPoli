import './Polibutton.css'


function Polibutton({icone, container}) {
   return ( 
      <div className="polibutton">
         <input type="radio" name={container} />
         {icone}
      </div>
    );
}

export default Polibutton;
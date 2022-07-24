import './Polibutton.css'

function Polibutton({icone, container, tipo='radio'}) {
   return ( 
      <div className="polibutton">
         <input type={tipo} name={container} id={container}/>
         {icone}
      </div>
    );
}

export default Polibutton;
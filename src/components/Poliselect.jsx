import './Poliselect.css'

function PoliSelect({itens}) {
    return(
        <select className='PoliSelect'>
        {itens.map(item =>(
           <option>{item.nome} </option>
        ))}
        </select>
    )
}

export default PoliSelect;
import './Poliselect.css'

function PoliSelect({itens}) {
    console.log(itens)

    return(
        <select className='PoliSelect' name="" id="">
        {itens.map(item =>(
           <option value="">{item .nome} </option>
        ))}
        </select>

    )
}

export default PoliSelect;
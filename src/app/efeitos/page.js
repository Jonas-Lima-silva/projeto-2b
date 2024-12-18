"use client"

import { useEffect, useState } from "react"
    
export default function efeitos() {
    //const [cont1, setCont1] = useState(0);
    //const [cont2, setCont2] = useState(1);
    const [ufs, setUfs] = useState([])
    const [estado, useEstado] = useState("")

    const getUfts = async()=>{
        const response = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
        if (!response.ok){
            throw new Error ('Erro ao buscar os dados: '+response.statusText);  
    
        }
            const data = await response.json();
            console.log(data)

    }
    useEffect(()=> {
       getUfts();
    })
        return(
         <select onChange={()=> setEstado(ev.target.valeu)}>
            
            {ufs.map(uf =>(
                <option value={uf.id} key={uf.id}>{uf.nome}</option>
            ))}
            
         </select>
        )

    //return(
        //<div><h1>UseEffectseEffect / Efeiros Colaterais </h1>
           //<button onClick={()=>{setCont1(cont1 +1)}}>Adicionar</button>
            //<p>cont 1 = {cont1}</p>

           //<button onClick={()=>{setCont2(cont2 +1)}}>Adicionar</button>
           // <p>cont 2 = {cont2}</p>
        //</div>
   // )
}

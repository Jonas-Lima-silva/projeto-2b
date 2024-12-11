"use client";
import { useState } from "react";

export default function filtro(){
    const nums = [1,2,3,4,5,6,7,8,9,10];
    const pares = nums.filter((num) =>(num % 2 === 0));
    const nomes = ['bruno', 'julio', 'wagner','pedro'];
    const[busca, setBusca] = useState('')
    const nomesBusca = nomes.filter((nome) => (nome.toLowerCase().includes(busca.toLowerCase())))

    console.log(nums);
    console.log(pares);



    return(
        <div>
                
         <h1>filtro</h1>
         <input
            value={busca}
            type="text"
            onChange={(ev) => setBusca(ev.target.value)}
        /><ul>
            {
                nomesBusca.map((nome, i)=>(
                <li key={i}>{nome}</li>
            ))
            }
        </ul>

        </div>
    )
}
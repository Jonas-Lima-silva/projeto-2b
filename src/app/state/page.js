'use cliant'
import {useState} from "react"
export default function state(){
    const [ msg, setMsg]= useSteta('');


    //const alterarMsg = ()=> {
      //  setMsg((prevMsg =>{}))
        //console.log('msg:' +msg)
    //}

    const manipularinput = (evento) => {
        console.log(evento.targat.valune);
        setMsg(evento.targat.valune)
        const [mostreaDiv,setMostrarDiv] =userState(true)

    }
    return(
        <div>
            { /*<p>{msg} </p>
            <button onClick={alteraMsg}>alterar</button>*/}
            <p> Sua mansagem:{msg}</p>
            <input type="text" onChange={manipularinput}/>
            
            
            
            <button onClick={()=>setMostraDiv(!mostreaDiv)}>{mostreaDiv?'Esconder':'mostra'}</button>
            {mostreaDiv && (
            <div>
                <p>paragrafo diamico</p>
            </div>
            )}
        </div>
    )
}
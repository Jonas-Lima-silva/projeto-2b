import card from "@/components/card"


export default function props(){
    
    const carros = [
        {
            id: 1,
            modelo: 'fusca',
            ano:1975,
            cor: 'preto'
        },
        {
            id:2,
            module: 'opala',
            ano:1960,
            cor:'branco',
        },
        {
            id:3,
            modelo:'diplomata',
            ano: 1968,
            cor: 'azul',
    
        },
        {
            id:4,
            module:'covete',
            ano: 1890,
            cor:'vemelho',
        },
        {
            id:5,
            module:'savero',
            ano: 1987,
            cor:'roxo',
        },
    
    ]
   

    return(
        
        <div>
            <h1>props</h1>
            {
                carros.map((carro)=>(
            <Card key={carro.id} 
            id={carro.id}
             modelo={carro.modelo}
             ano={carro.ano}
              cor={carro.cor}/>
              ))}
        </div>
    )
}

    
import card from '@/components/card'

export default function listas(){
    const nomes = ['wagner','jholemar','Brunix','julinho']
    const carros =[
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
        <div>
        <h1>listas</h1>
        <ul style={{marginleft:'50px'}}>
            {nomes.map((nome, id) =>(
                <li key={id}>{id+1} - {nome}</li>
            ))}
        </ul>
        </div>
        <div>
            <h2>Lista de objeto</h2>
            {
                carros.map((carro)=>(
                    <div key={carro.id}>
                        <h3>{carro.id} - {carro.modelo}</h3>
                        <p>{carro.cor}</p>
                        <p>{carro.ano}</p>
                    </div>
                ))
            }
        </div>
        </div>
    
    )
}
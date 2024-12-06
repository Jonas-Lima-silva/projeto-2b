import styles from './card.module.css';

export default function card({id, modelo, ano, cor}){
    return(
        <div>
            <h2>{id} - {modelo}</h2>
            <p>{id}</p>
            <p>{ano}</p>
            <p>{cor}</p>
        </div>
    )
}
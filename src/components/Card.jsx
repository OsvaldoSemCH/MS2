import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = (props) => {
  return(
      <div className={style.Card}>
        <div className={style.Status} style={props.status ? {backgroundColor: '#00c000'} : {backgroundColor: '#c00000'}}></div>
          <p>Álbum: <h1>{props.name}</h1></p>
          <p>Artista: <h2>{props.desc}</h2></p>
          <p>Preço: R$ {props.value}</p>
          <div className={style.CardBottom}>
            <img src={props.image} alt={props.name} width={150} height={"auto"}/>
            <p>Gênero: {props.category}</p>
          </div>
      </div>
  )
}
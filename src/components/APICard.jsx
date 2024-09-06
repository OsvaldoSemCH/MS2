import style from './APICard.module.css'

export const APICard = ({name, species, type, gender, image, status}) => {
  return(
      <div className={style.Card}>
            <div className={style.Status} style=
            {
                status === 'Alive' ? {backgroundColor: '#00c000'} : 
                status === 'Dead' ? {backgroundColor: '#c00000'} :
                {backgroundColor: '#c0c000'}
            }>
            </div>
            <h1>{name}</h1>
            <h2>{species}</h2>
            <p>Gender: {gender}</p>
            {type ? <p>{type}</p> : <br></br>}
            
            <img src={image} alt={name} width={150} height={"auto"}/>
      </div>
  )
}
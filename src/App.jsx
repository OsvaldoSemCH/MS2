import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import { APICard } from './components/APICard'
import style from './App.module.css'
import HeaderButtons from './components/HeaderButtons'


function App() {
  const [show, setShow] = useState("");
  const [data, setData] = useState([]);
  const [page, setPage] = useState("");
  const [found, setFound] = useState(true);

  useEffect(() => {
    api.get(`/character/?page=${page}`).then((response) => {
      if(!response.data.results){
        setFound(false);
      }else{
        setFound(true);
      }
      setData(response.data.results)
    }).catch((error) => {
      if(error.response.status === 404){
        setFound(false);
      }
      console.error(error)
    })
  }, [page])

  return (
    <>
    <div className={style.wrapBtns}>
      <button onClick={() => setShow("prod")}>Produtos</button>
      <button onClick={() => setShow("api")}>API</button>
      <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    <div className={style.wrapPage}>
      <h1>Exercícios de manutenção</h1>
     {show === "prod" &&
        <>
          <h2>Showroom de produtos</h2>
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'center', gap: '24px'}}>
            {produtos.map((item) => {
              return(
                <Card
                  name={item.name}
                  desc={item.desc}
                  value={item.value}
                  image={item.image} 
                  key={item.id} 
                  status={item.status} 
                  category={item.category}
                />
              )
             })}
            </div>
        </>
      }
     {show === "api" &&
        <>
          <h2>Rick and Morty API</h2>
            <div>
               <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)}/>
            </div>
            { found ? 
            <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'stretch', justifyContent: 'center', gap: '24px'}}>
            {data.map((item) => { 
             return(
              <div key={item.id}>
                <APICard name={item.name} species={item.species} gender={item.gender} image={item.image} status={item.status} type={item.type}/>
                {/* <button onClick={() => {}}>Info</button> */}
              </div>
              )
            })}
            </div> : <h1>Esta pagina não contém este personagem</h1> }
       </>
      }
     {show === "map" &&
        <>
      <h2>Mapa</h2>
          <div>
              mapa aqui
          </div>
         </>
      }
    </div>
    </>
  )
}

export default App

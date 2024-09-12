import style from './App.module.css'
import HeaderButtons from './components/HeaderButtons'


function App() {
  return (
    <>
      <HeaderButtons/>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
      </div>
    </>
  )
}

export default App
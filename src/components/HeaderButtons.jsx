import style from "./HeaderButtons.module.css"

export default function HeaderButtons()
{
    return(
    <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
    </div>
    )
}
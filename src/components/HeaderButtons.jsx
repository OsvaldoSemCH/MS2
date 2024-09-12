import style from "./HeaderButtons.module.css"

export default function HeaderButtons()
{
    return(
    <div className={style.wrapBtns}>
        <a href="/prod"><button>Produtos</button></a>
        <a href="/api"><button>API</button></a>
        <a href="/map"><button>Mapa</button></a>
        <a href='/charts'><button>Gráficos</button></a>
    </div>
    )
}
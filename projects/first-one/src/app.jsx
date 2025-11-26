import './app.css'
export function App({name}, {appName}, {imgUrl}) {
    return (
        <article className='article-card'>
            <header className='head-card'>
                <img className='img-card' src={imgUrl} alt="avatar1" srcset="" />
                <div className='div-card'>
                    <strong className='strong1-card'>{name}</strong>
                    <span className='span1-card'>{appName}</span>
                </div>
            </header>
            <aside className='aside1-card'>
                <button className='buttonfollow-card'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}
import './Nav.css'

function NavBar() {
    return (
        <>
        <div className='container__nav'>
                <nav className='Nav'>
                    <div>
                        <h2 className='Nav__titulo'>Bruno</h2>
                    </div>
                <ul>
                    <li className='list'>
                        <a href="#">
                            <button>Perfil</button>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#">
                            <button>Skills</button>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#">
                            <button>Formações</button>
                        </a>
                    </li>
                    <li className='list'>
                        <a href="#">
                            <button>Experiencia</button>
                        </a>
                    </li>
                </ul>
            </nav>
            </div>
            </>
    )
}
export default NavBar
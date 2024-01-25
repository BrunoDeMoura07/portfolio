import './Nav.css'

function NavBar() {
    return (
        <div className='container__nav'>
            <nav className='Nav'>
                <ul>
                    <li>
                        <a href="#">
                            <button>Home</button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button>Skills</button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button>Formações</button>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <button>Experiencia</button>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default NavBar
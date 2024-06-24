export default function Navbar({title}){
    return (
        <nav className="navbar navbar-expand-lg bg-dark ">
            <div className="container-fluid ">
                <a className="navbar-brand text-light fs-bold" href="#">{title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                    <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">Features</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link text-light" href="#">Pricing</a>
                    </li>
                </ul>
                <span className="navbar-text text-light">
                    User
                </span>
                </div>
            </div>
        </nav>
    )
}
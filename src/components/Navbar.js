const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">{props.sctn1}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.sctn2}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.sctn3}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{props.sctn4}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
export default Navbar;
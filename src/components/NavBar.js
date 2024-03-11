import { Link } from "react-router-dom";

 const NavBar=()=> {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR8IH_w0_sSs5CubclOyvynOOavOqBWZGXkg&usqp=CAU" height="40px" width="40px" alt="newsLogo" />
            <Link
             className="navbar-brand mx-3" to="/">
              NewsMonkey
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link " aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                
               
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/general">General</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link " aria-current="page" to="/technology">Technology</Link></li>
              </ul>
            </div>
          </div>
        </nav>
        
      </div>
    );
}
export default NavBar

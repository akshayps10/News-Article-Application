import React from 'react'
import { Link } from 'react-router-dom'
 

const Header = () => {
  return (
    <header className="shadow-lg sticky-top">
  <div className="d-flex justify-content-between align-items-center container p-4">
    <Link to={"/"}>
      <h1 className="font-weight-bold text-xl d-flex flex-wrap">
        <span className="text-muted"><i class="fa-solid fa-newspaper"></i> Morning</span>
        <span className="text-dark">Dispatch</span>
      </h1>
    </Link>

    <form className="p-3 bg-light rounded d-flex align-items-center">
      <input
        type="text"
        placeholder="Search..."
        className="form-control ]"
      />
      <button className="btn btn-outline-secondary ms-2">
        <i className="fas fa-search text-muted"></i>
      </button>
    </form>

    <ul className="d-flex gap-4 list-unstyled mb-0">
      <Link to={"/"} className="d-none d-lg-inline text-muted text-decoration-none">
        <li className="hover-underline">Home</li>
      </Link>

      <Link to={"/about"} className="d-none d-lg-inline text-muted text-decoration-none">
        <li className="hover-underline">About</li>
      </Link>

      <Link to={"/news"} className="d-none d-lg-inline text-muted text-decoration-none">
        <li className="hover-underline">News Articles</li>
      </Link>
    </ul>

    
      <div className="dropdown">
        <button className="btn btn-link dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
        
        </button>
        <ul className="dropdown-menu">
          <li><h6 className="dropdown-header">My Account</h6></li>
          <li>
            <a className="dropdown-item text-muted">
              <div className="d-flex flex-column">
               
              </div>
            </a>
          </li>
          <li><a className="dropdown-item" >Profile</a></li>
          <li><a className="dropdown-item text-danger"  >Sign Out</a></li>
        </ul>
      </div>

      <Link to={"/sign-in"}>
        <button className="btn btn-primary">Sign In</button>
      </Link>

  </div>
</header>

  )
}

export default Header

import React from 'react'
import Link from 'next/link'
import { useRouter } from "next/router";

var Navbar = ()=>{
  const router = useRouter();
  return (
    <>
    <nav className="navbar navbar-default navbar-fixed-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <Link href="/" >
          <a className="navbar-brand">artcode.az</a>
        </Link>
      </div>
      <div id="navbar" className="collapse navbar-collapse">
        <ul className="nav navbar-nav">
          <li className={router.pathname == "/" ? "active" : ""}>
            <Link href="/" >
              <a>Home</a>
            </Link>
            </li>
          <li className={router.pathname == "/about" ? "active" : ""}>
            <Link href="/about" as="/haqqimizda" >
              <a>About</a>
            </Link>
            </li>
          <li className={router.pathname == "/contact" ? "active" : ""}>
            <Link href="/contact" as="/elaqe" >
              <a>Contact</a>
            </Link>
          </li>
          <li className={router.pathname == "/news" ? "active" : ""}>
            <Link href="/news" as="/xeberler" >
              <a>News</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </>
  )
}

export default Navbar
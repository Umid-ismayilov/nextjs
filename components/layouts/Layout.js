import React from 'react'
import Header from "./includes/Header"
import Footer from "./includes/Footer"
import Head from 'next/head'
import Script from 'next/script'


var Layout = (props)=>{
  return (
  <>
     <Head>
        <meta charset="utf-8"/>
        <meta  http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <meta name="description" content=""/>
        <meta name="author" content=""/>
        <title>Sticky Footer Navbar Template for Bootstrap</title>
        <link href="https://getbootstrap.com/docs/3.4/dist/css/bootstrap.min.css" rel="stylesheet"/>
        <link href="https://getbootstrap.com/docs/3.4/examples/sticky-footer-navbar/sticky-footer-navbar.css" rel="stylesheet"/>
    
      </Head>
      <Header/>
        {props.children}
      <Footer/>
      <Script src="https://code.jquery.com/jquery-1.12.4.min.js" integrity="sha384-nvAa0+6Qg9clwYCGGPpDQLVpLNn0fRaROjHqs13t4Ggj3Ez50XnGQqc/r8MhnRDZ" crossorigin="anonymous"></Script>
   </>
  )
}

export default Layout
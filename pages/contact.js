import React from 'react'
import Layout from "../components/layouts/Layout"
import Header from "../components/layouts/includes/Header"
import Footer from "../components/layouts/includes/Footer"
const Contacts = () =>{
  return (
    <Layout>
      <div className="container">
      <div className="page-header">
        <h1>Contact</h1>
      </div>
    </div>
    <style jsx>{`
        html {
          position: relative;
          min-height: 100%;
        }
        body {
          margin-bottom: 60px; /* Margin bottom by footer height */
        }
        .footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 60px; /* Set the fixed height of the footer here */
          background-color: #f5f5f5;
        }
        
        
        /* Custom page CSS
        * Not required for template or sticky footer method.
        * -------------------------------------------------- */
        
       .container {
          padding: 60px 15px 0;
        }
        .container .text-muted {
          margin: 20px 0;
        }
        
        .footer > .container {
          padding-right: 15px;
          padding-left: 15px;
        }
        
        code {
          font-size: 80%;
        }
      `}</style>
    </Layout>
  )
}

export default Contacts;

import Layout from "../components/layouts/Layout"
import { useState, useEffect } from 'react'
import { useRouter } from "next/router"
const newsDetail = (props) =>{
  const posts   = props.data;


  return (
    <Layout>
      <div className="container">
      <div className="page-header">
        <h1>NewsDetail</h1>
        <div  className='row'>
         <div className="card col-md-12">
            <div className="card-body">
              {/* <code>{JSON.stringify(posts)}</code> */}
              <h5 className="card-title col-md-12">{posts.title}</h5>
              <p  className="card-text  col-md-12">{posts.body}</p>
            </div>
            <hr/>
          </div>

         </div>
     
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

export async function getServerSideProps(context) {
  console.log(context);
  const {query: { id },} = context
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}


export default newsDetail;
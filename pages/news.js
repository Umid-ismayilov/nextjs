import React from 'react'
import Layout from "../components/layouts/Layout"
import Link from 'next/link'
const News = ({data}) =>{
  const limit = (data,limit)=>{
    return data.length<limit ? data : data.substring(0,limit)+'...'
  }
  return (
    <Layout>
      <div className="container">
      <div className="page-header">
        <h1>News</h1>
        <div  className='row'>
        {data.map(item=>(
         
          <div key={item.id} className="card col-md-12">
            <div className="card-body">
              <h5 className="card-title col-md-12">{limit(item.title,30)}</h5>
              <p  className="card-text  col-md-12">{limit(item.body,150)}</p>
              <Link  href={`/newsDetail?id=${item.id}`} as={`/xeber/${item.id}`}>
                <a className="btn btn-primary">Go somewhere</a>
              </Link>
            </div>
            <hr/>
          </div>
        
          )
        )}
         </div>
        {/* <code>{JSON.stringify(data)}</code> */}
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

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}
export default News;
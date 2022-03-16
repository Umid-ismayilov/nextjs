// server.js
const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'
const app = next({dev})
const handle = app.getRequestHandler()


app.prepare().then(() => {
    const server  = express();
    
    // server.get('/:lang/haqqimizda',(req,res)=>{
    //     const lang = req.params.lang;
    //     const mergedQuery = Object.assign({},req.query,req.params);
    //     return app.render(req,res,`/about`,mergedQuery);
    // })
    // server.get('/:lang/elaqe',(req,res)=>{
    //     // const lang = req.params.lang;
    //     const mergedQuery = Object.assign({},req.query,req.params);
    //     return app.render(req,res,'/contact',mergedQuery);
    // })
    // server.get('/xeberler',(req,res)=>{
    //     // const lang = req.params.lang;
    //     const mergedQuery = Object.assign({},req.query,req.params);
    //     return app.render(req,res,'/news',mergedQuery);
    // })

    // server.get('/xeber/:id',(req,res)=>{
    //     //   const lang = req.params.lang;
    //     const mergedQuery = Object.assign({},req.query,req.params);
    //     return app.render(req,res,'/newsDetail',mergedQuery);
    // })
    server.get('*',(req,res)=>{
        return handle(req,res)
    })

    const port = process.env.PORT || 3000
    server.listen(port, (err) => {
        if (err) throw err
        console.log(`> Ready on ${port}`)
      })

})
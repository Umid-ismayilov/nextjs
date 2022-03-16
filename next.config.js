/**
 * @type {import('next').NextConfig}
 */
/* env use pages {process.env.APP_URL} */
 const nextConfig = {
    i18n: {
         locales: ['az', 'en', 'ru'],
         defaultLocale: "az",
         realDefaultLocale: 'az',
         localeDetection: false
        // domains: [
        //     {
        //       domain: 'localhost:3000',
        //       defaultLocale: 'az-AZ',
        //       http: true,
        //     }
        // ]
    },
    env: {
        APP_URL: 'http://localhost:3000/',
      },
      httpAgentOptions: {
        keepAlive: false,
      },
      async rewrites(){
         
        return [
          {
            source: '/limak/:path*',
            destination: 'https://limak.az',
            basePath: false,
          },
          {
            source: '/:lang/haqqimizda',
            destination: '/:lang/about',
            locale: false,
          },
          {
            source: '/:lang/elaqe',
            destination: '/:lang/contact',
            locale: false,
          },
          {
            source: '/:lang/xeberler',
            destination: '/:lang/news',
            locale: false,
          },
          {
            source: '/:lang/xeber/:id',
            destination: '/:lang/newsDetail?id=:id',
            locale: false,
          },
        ]
      },
      
      async redirects() {
        return [
          {
            source: '/limak-redirect',
            destination: 'https://limak.az',
            permanent: true,
          },
        ]
      },



      async headers() {
        return [
          {
            source: '/:path*',
            headers: [
              {
                key: 'Accept-Language',
                value: 'az',
              }
            ],
          },
        ]
      },

//    basePath: '/docs',

  }

  module.exports = nextConfig
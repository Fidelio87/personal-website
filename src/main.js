// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

/*
  head.link.push({ rel: 'apple-touch-icon', href: '/apple-touch-icon.png'}),
  head.link.push({ rel: 'icon', href: '/favicon.ico'}),*/

  


  head.script.push({
    src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r119/three.min.js',
    body: true  
  }),
  head.script.push({
    src: 'https://cdn.jsdelivr.net/npm/vanta@0.5.21/dist/vanta.net.min.js',
    body: true  
  })

}




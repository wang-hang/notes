module.exports = {
  base:'/notes/',
  title: "wanghang's Blog",
  description: 'wanghang de blog',
  configureWebpack:{
    resolve:{
      alias:{
        '@':''
      }
    }
  },
  markdown:{
    lineNumbers: true,
  },
  themeConfig:{
    displayAllHeaders: true,
    nav: [
      {text: 'Home', link:'/'},
      {text: 'blog', link:'http://www.wanghang.cool'},
    ],
    sidebar:[
      ['/js-tricks/', 'JS-Tricks'],
      ['/css-tricks/', 'CSS-Tricks'],
    ],
    lastUpdated: 'Last Updated'
  }
}
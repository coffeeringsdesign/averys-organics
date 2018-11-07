import React from 'react'
import WebFont from 'webfontloader'
import Header from './Header'
import MarketSchedule from './MarketSchedule'
import ProduceSchedule from './ProduceSchedule'

WebFont.load({
  google: {
    families: ['Montserrat', 'sans-serif']
  }
});

function App(){
  return (
    <div>
        <style jsx global>{`
          body {
            margin: 0;
            padding: 0;
            background-color: #F6F0ED;
          }
        `}</style>
      <Header/>
      <MarketSchedule/>
      <ProduceSchedule/>
    </div>
  )
}

export default App

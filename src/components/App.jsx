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

function App() {

// class App extends React.Component {
 //  constructor(props) {
 //   super(props);
 //   this.state = {
 //     masterTicketList: []
 //   };
 //   this.handleAddingNewTicketToList = this.handleAddingNewTicketToList.bind(this);
 // }
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

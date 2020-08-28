import React, { Component } from 'react';
import Header from './book-search/Header';
import './App.css';
// import ReactDOM from 'react-dom';
import BookSearch from './book-search/BookSearch';

class App extends Component {
  render(){
    return(
      <div className='App'>
        <Header />
        <BookSearch />
      </div>
    );
  }
}
export default App;


// import React, { Component } from 'react';
// import './App.css';

// import DemonynApp from './demonymapp/demonymApp';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <DemonynApp/>
//       </div>
//     );
//   }
// }

// export default App;












// import React, { Component } from 'react';
// import HelloWorld from './state/drills/HelloWorld';
// import Bomb from './state/drills/Bomb';
// import RouletteGun from './state/drills/RouletteGun'; //'./state-drills/RouletteGun'
// import Accordion from './state/drills/Accordion';
// import './App.css'
// // we've set an initial state in the constructor method and then read that state within the render. 
// // We accessed the datetime property on the state object and used the date method toLocaleString() to 
// // display the date in a human-readable format.

// const sections = [
//   {
//     title: 'Section 1',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
//   },
//   {
//     title: 'Section 2',
//     content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
//   },
//   {
//     title: 'Section 3',
//     content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
//   },
// ]

// class App extends Component {s
//   render() {
//     return(
//       <div className='App'>
//         <h2>Hello World</h2>
//         <HelloWorld />
//         <h2>Bomb</h2>
//         <Bomb />
//         <h2>Roulette Gun</h2>
//         <RouletteGun bulletInChamber={6} />
//         <h2>Accordion</h2>
//         <Accordion sections={sections} />
//       </div>
//     )
//   }
// }
// export default App;
// class TheDate extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { datetime: new Date() };
//     console.log('constructor')
//   }
//   componentDidMount() {
//     console.log('componentDidMount')
//     this.interval = setInterval(() => {
//       console.log('setInterval')
//       this.setState({
//         datetime: new Date()
//       })
//     }, 1000)
//   }
//   componentWillUnmount() {
//     clearInterval(this.interval)
//   }
//   render() {
//     console.log('render')
//     return (
//       <div>{this.state.datetime.toLocaleString()}</div>
//     )
//   }
// }

// export default TheDate


// import React, { Component } from 'react';
// import './App.css';
// import Messages from './Messages';
// import TheDate from './TheDate';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <h1>YOUR APPLICATION NAME!</h1>
//         <div>Hello!</div>
//         <Messages name="Messages" unread={0}/>
//         <Messages name="Notifications" unread={10}/>
//       </div>
//     );
//   }
// }

// export default App;

// import React from 'react';
// import makeNullsArray from './_makeNullsArray';

// function Bubbles(props) {
//   const array = makeNullsArray(props.numberOfBubbles);

//   const bubbles = array.map((_, i) =>
//     <Bubble key={i} num={i} />
//   )

//   return (
//     <BubblesContainer>
//       {bubbles}
//     </BubblesContainer>
//   )
// }
// function App() {
//   return (
//     <Bubbles
//       numberOfBubbles={22}
//     />
//   );
// }
// export default Bubbles













// import Split from './composition/Split';
// import './App.css';
// import Tooltip from './composition/Tooltip';

// // make 2 tooltips here and another inside the App directly
// const firstTooltip = (
//   <Tooltip color='hotpink' message='tooltip message'>
//    ipsum
//   </Tooltip>
// )
// const secondTooltip = (
//   <Tooltip color='#126BCC' message='another tooltip message'>
//     officiis
//   </Tooltip>
// )

// function App() {
//   return (
//     <main className='App'>
//       <Split className='left' flexBasis='2'>
//         This is the content for the left Split. Lorem {firstTooltip} dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?<br />
//         {/* make another tooltip directly inside the App */}
//         <Tooltip message='one more tooltip message'>
//           Necessitatibus?
//         </Tooltip>
//       </Split>
//       <Split className='right'>
//         This is the content for the right Split. Inventore aliquid cupiditate suscipit repellat. Quaerat quis {secondTooltip} quam fuga. Aliquid quo possimus id soluta aspernatur.
//       </Split>
//     </main>
//   )
// }

// export default App
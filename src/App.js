import './App.css';
import React, {useState, useEffect} from 'react';
import randomcolor from 'randomcolor';

//example
//Class component (without hooks)

// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       answer: "Yes"
//     }
//   }

//   render() {
//     return (
//       <div>
//         <h1>Is state important to know? {this.state.answer}</h1>
//       </div>
//     )
//   }
// }

// function App() {
//   const [value] = useState("Yes")

//   return (
//     <div className="App">
//       <p>Is state important to know? {value}</p>
//     </div>
//   );
// }

// class App extends React.Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0
//         }
//     }
    
//     render() {
//         return (
//             <div>
//                 <h1>{this.state.count}</h1>
//                 <button>Change!</button>
//             </div>
//         )
//     }
// }

//counter example

function App() {
  //set counter to 0
  let [count, setCount] = useState(0);
  let [answer, setAnswer] = useState('No');
  let [color, setColor] = useState('');
  let [watch, setWatch] = useState(0);

  //answer handlers
  function isOddClick() {
    setAnswer(prevAnswer => prevAnswer === 'No' ? prevAnswer = 'Yes' : prevAnswer = 'No')
  }

  //count handlers
  function increment() {
    setCount(prevCount => prevCount + 1);
  }

  function decrement() {
    setCount(prevCount => prevCount - 1);
  }

  function twoX() {
    setCount(prevCount => prevCount * 2);
  }

  function squared() {
    setCount(prevCount => prevCount * prevCount);
  }

  function reset() {
    setCount(prevCount => prevCount = 0)
  }

  //color handler
  useEffect(() => {
    setColor(randomcolor())
  }, [count]);

  //watch handler
  useEffect(() => {
    const intervalId = setInterval(() => {
      setWatch(prevWatch => prevWatch + 1)
    }, 1000)
    //component will unmount behavior
    return () => clearInterval(intervalId)
  }, []);

  function resetWatch() {
    setWatch(prevWatch => prevWatch = 0)
  }
    
  return (
      <div className='App'>
          <h1 style={{color: color}}>{count}</h1>
          <button onClick={increment}>increment</button>
          <button onClick={decrement}>decrement</button>
          <button onClick={twoX}>multiply by two</button>
          <button onClick={squared}>squared</button>
          <button onClick={reset}>reset</button>
          <hr />
          <h1>{answer}</h1>
          <button onClick={isOddClick}>is odd click?</button>
          <hr />
          <h1>{watch}</h1>
          <button onClick={resetWatch}>reset watch</button>
      </div>
  )
}

export default App;

/**
 * rather than passing multiple things in useState,create multiple versions of state
 * e.g.
 * const [count, setCount] = useState(0);
 * const [answer, setAnswer] = useState("Yes")
 */
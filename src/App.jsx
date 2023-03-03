import reactLogo from './assets/react.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { increment, decrement, incrementBy } from './store/slices/counter/counterSlice'
import { useState } from 'react'

function App() {

  const { counter } = useSelector( state => state.counter )
  const dispatch = useDispatch()

  const [incrementValue, setIncrementValue] = useState(0);

  const handleChange = (event) => {
    setIncrementValue(event.target.value)
  }


  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          Vite
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          React
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>count is { counter }</h1>
      <div className="card">
        <button onClick={ () => dispatch( increment() ) }>
          Increment
        </button>
        <button onClick={ () => dispatch( decrement() ) }>
          Decrement
        </button>
        <button onClick={ () => dispatch( incrementBy(incrementValue) ) }>
          Increment by:
        </button>
        <input type="string" name='inputValue' onChange={handleChange}/>
      </div>
    </div>
  )
}

export default App

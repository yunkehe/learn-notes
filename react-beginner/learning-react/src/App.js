import logo from './logo.svg'
import './App.css'
import { createStore } from 'redux'

// const store = createStore(reducer, preloadedState, enhancer);
import Table from './components/Table'
import Comment from './components/Comment'
// 计数器
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        {/* <Table></Table> */}
        <Comment></Comment>
        <p>函数式编程</p>
      </header>
    </div>
  )
}

export default App

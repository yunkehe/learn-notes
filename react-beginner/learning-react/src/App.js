import logo from './logo.svg';
import './App.css';
import { createStore } from 'redux';

// const store = createStore(reducer, preloadedState, enhancer);
import Table from './components/Table';
import Comment from './components/Comment';

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
			</header>

    </div>
  );
}

export default App;

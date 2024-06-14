import './App.css';
import AIWindow from './AIWindow';
import ExperimentWindow from './ExperimentWindow';

function App() {

  return (
    <div className='App'>
      <div className='AIContainer'>
        <AIWindow />
      </div>
      <div className='ExperimentContainer'>
        <ExperimentWindow />
      </div>
    </div>
  )
}

export default App


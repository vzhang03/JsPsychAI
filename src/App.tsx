import './App.css';
import AIWindow from './AIWindow';
import ExperimentWindow from './ExperimentWindow';
import { useState } from 'react';

function App() {
  const [code, setCode] = useState<any>(null);

  const updateCode = (code: string) => {
    setCode(code);
  };

  return (
    <div className='App'>
      <div className='AIContainer'>
        <AIWindow onAIResponse={updateCode}/>
      </div>
      <div className='ExperimentContainer'>
        <ExperimentWindow code={code}/>
      </div>
    </div>
  )
}

export default App


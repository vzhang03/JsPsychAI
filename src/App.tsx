import './App.css';
import AIWindow from './AIWindow';
import ExperimentWindow from './ExperimentWindow';
import { useState, useRef } from 'react';

function App() {
  const [aiCode, setCode] = useState<any>(null);
  const experimentRef = useRef<any>(null); // Ref to access ExperimentWindow component

  const updateCode = (aiCode: string) => {
    setCode(aiCode);
  };

  const getExperimentCode = () => {
    if (experimentRef.current) {
      const data = experimentRef.current.getData();
      return data; // Ensure the data is returned
    }
  };

  return (
    <div className='App'>
      <div className='AIContainer'>
        <AIWindow onAIResponse={updateCode} getExperimentCode={getExperimentCode}/>
      </div>
      <div className='ExperimentContainer'>
        <ExperimentWindow code={aiCode} ref={experimentRef}/>
      </div>
    </div>
  )
}

export default App


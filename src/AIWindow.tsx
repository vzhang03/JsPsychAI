import { useState } from 'react';

interface AIWindowProps {
  onAIResponse: (code: string) => void;
  getExperimentCode: () => string | undefined; // Updated return type
}

const AIWindow: React.FC<AIWindowProps> = ({ onAIResponse, getExperimentCode }) => {
  const [experimentData, setExperimentData] = useState<string | undefined>(undefined);
  // Example function to simulate AI interaction
  const handleAIResponse = () => {
    const aiResponse = 'AI response data'; // Replace with actual AI logic
    onAIResponse(aiResponse); // Pass data back to parent component
  };

  const getExperimentData = () => {
    setExperimentData(getExperimentCode()); // Call the function to get experiment data
  };

  return (
    <div className="AIWindow">
      <pre className='code-chunk'>{(experimentData ? experimentData : "does not exist")}</pre>
      <button onClick={getExperimentData}>Get Experiment Data</button>
      <button onClick={handleAIResponse}>Send AI Response</button>
    </div>
  );
};

export default AIWindow;

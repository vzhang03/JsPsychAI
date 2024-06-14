import ExperimentComponent from "./ExperimentComponent"
import { useState } from "react";

const defaultScriptString = `
  let jsPsych = initJsPsych({
    on_finish: async function() {      
      jsPsych.data.displayData();  
    },
  });

  let trial = {
    type: jsPsychHtmlKeyboardResponse,
    stimulus: "Hello world",
  };

  jsPsych.run([trial]);
`;

export default function ExperimentWindow(){
  const [runExperiment, setRunExperiment] = useState(false);
  const [scriptString, setScriptString] = useState<string>(defaultScriptString); // Explicitly set type to string

  const handleButtonClick = () => {
    setRunExperiment(true);
  };

  const handleScriptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setScriptString(event.target.value);
  };

  return (
    <div className='ExperimentWindow'>
      <div>
        <textarea
            className='script'
            value={scriptString}
            onChange={handleScriptChange}
            rows={20} // Adjust the number of rows as needed
            cols={60} // Adjust the number of columns as needed
          />        
        <button onClick={handleButtonClick}>Start Experiment</button>
      </div>
      {runExperiment && <ExperimentComponent scriptString={scriptString} />}
    </ div>
  )
}
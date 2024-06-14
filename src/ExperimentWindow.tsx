import React, { useState, useEffect } from "react";
import RunExperimentComponent from "./components/RunExperimentComponent";

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

interface ExperimentWindowProps {
  code: any;
}

const ExperimentWindow: React.FC<ExperimentWindowProps> = ( {code} ) => {
  const [runExperiment, setRunExperiment] = useState(false); // code when running experiment
  const [scriptString, setScriptString] = useState<string>(defaultScriptString); // code when setting script screen
  const [codeChunks, setCodeChunks] = useState<string[]>([defaultScriptString]);
  const [selectedChunkIndex, setSelectedChunkIndex] = useState<number>(0); // Track the selected code chunk

  useEffect(() => {
    if (code) {
      setScriptString(code);
      setCodeChunks(prevChunks => [...prevChunks, code]);
      setSelectedChunkIndex(codeChunks.length); // Set the selected chunk index to the new chunk
    }
  }, [code]);

  const handleButtonClick = () => {
    setRunExperiment(true);
  };

  const handleScriptChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newScriptString = event.target.value;
    setScriptString(newScriptString);
    setCodeChunks(prevChunks => {
      const newChunks = [...prevChunks];
      newChunks[selectedChunkIndex] = newScriptString;
      return newChunks;
    });
  };

  const handleCodeChunkClick = (index: number) => {
    setScriptString(codeChunks[index]);
    setSelectedChunkIndex(index);
  };

  return (
    <div className="ExperimentWindow">
      <div>
        {codeChunks.map((_, index) => (
          <button key={index} onClick={() => handleCodeChunkClick(index)}>
            {`Experiment ${index + 1}`}
          </button>
        ))}
      </div>
      <div>
        <textarea
          className="script"
          value={scriptString}
          onChange={handleScriptChange}
          rows={20}
          cols={60}
        />
        <button onClick={handleButtonClick}>Start Experiment</button>
      </div>
      {runExperiment && (
        <RunExperimentComponent scriptString={scriptString} />
      )}
    </div>
  );
};

export default ExperimentWindow;

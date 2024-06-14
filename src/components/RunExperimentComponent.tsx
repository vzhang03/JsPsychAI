import { useEffect } from "react";
// import { initJsPsych } from "jspsych";
// import htmlKeyboardResponse from '@jspsych/plugin-html-keyboard-response';

interface ExperimentComponentProps {
  scriptString: string,
}

const RunExperimentComponent: React.FC<ExperimentComponentProps> = ({scriptString}) => {
  useEffect(() => {
    const script_fun = new Function(scriptString); 
    script_fun();
  }, [scriptString]);

  return (
    <div id="jspsych-content"></div>
  );
};

export default RunExperimentComponent;
import { useEffect } from "react";

const html_script = 
`
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Countdown Extension Example</title>
    <script src="https://unpkg.com/jspsych@7.3.4"></script>
    <script src="https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.3"></script>
    <link href="https://unpkg.com/jspsych@7.3.4/css/jspsych.css" rel="stylesheet" />
  </head>
  <body>
    <script>
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
    </script>
  </body>
</html>
`


const ExperimentComponent = () => {
  useEffect(() => {
    // Load external scripts dynamically
    const script1 = document.createElement('script');
    script1.src = 'https://unpkg.com/jspsych@7.3.4';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://unpkg.com/@jspsych/plugin-html-keyboard-response@1.1.3';
    document.head.appendChild(script2);

    // Execute script logic after scripts have loaded
    script1.onload = script2.onload = () => {
      let jsPsych = window.initJsPsych({
        on_finish: async function() {
          jsPsych.data.displayData();
        },
      });

      let trial = {
        type: jsPsychHtmlKeyboardResponse,
        stimulus: 'Hello world!',
      };

      jsPsych.run([trial]);
    };

    // Cleanup function (optional)
    return () => {
      // Remove scripts if necessary
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return (
    <div id="jspsych-content"></div>
  );
};

export default ExperimentComponent;
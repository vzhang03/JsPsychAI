interface AIWindowProps {
  onAIResponse: (code: string) => void;
}

const AIWindow: React.FC<AIWindowProps> = ({ onAIResponse }) => {
  // Example function to simulate AI interaction
  const handleAIResponse = () => {
    const aiResponse = 'AI response data'; // Replace with actual AI logic
    onAIResponse(aiResponse); // Pass data back to parent component
  };

  return (
    <div className="AIWindow">
      <div>This is the AI window</div>
      <button onClick={handleAIResponse}>Send AI Response</button>
    </div>
  );
};

export default AIWindow;
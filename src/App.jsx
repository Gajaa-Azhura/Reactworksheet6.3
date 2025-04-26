import { useState } from "react";
import "./App.css";

function App() {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Toggle Content App</h1>
      <button
        onClick={toggleContent}
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mb-4"
      >
        Toggle Content
      </button>
      {isContentVisible && (
        <div className="p-4 bg-white rounded shadow-md">
          <p className="text-lg">This is the toggled content! Click the button to hide it.</p>
        </div>
      )}
    </div>
  );
}

export default App;
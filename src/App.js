import React, { useState } from "react";
import axios from "axios";
import "./App.css";

const App = () => {
  const [qoute, setQuote] = useState("Demo Quote");
  const handleQuote = async () => {
    const res = await axios.get("https://api.quotable.io/random");
    setQuote(res.data.content);
  };
  return (
    <div className="box">
      <i className="fas fa-quote-left fa2"></i>
      <div className="text">
        <i className="fas fa-quote-right fa1"></i>
        <div>
          <h3>Quote the day</h3>
          <p>{qoute}</p>
          <button onClick={handleQuote}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default App;


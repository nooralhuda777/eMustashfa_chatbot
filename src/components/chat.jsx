import React from "react";
import "../App.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const [inputText, setInputText] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [conversationHistory, setConversationHistory] = useState([]);
  const options = {
    method: "POST",
    url: "https://ai-doctor-api-ai-medical-chatbot-healthcare-ai-assistant.p.rapidapi.com/chat",
    params: { noqueue: "1" },
    headers: {
      "x-rapidapi-key": import.meta.env.VITE_API_KEY,
      "x-rapidapi-host":
        "ai-doctor-api-ai-medical-chatbot-healthcare-ai-assistant.p.rapidapi.com",
      "Content-Type": "application/json",
    },
    data: {
      message: "",
      specialization: "neurosurgery",
      language: "en",
    },
  };

  useEffect(() => {
    setConversationHistory([
      {
        message:
          "Welcome to your eMustashfa! I’m your virtual health assistant. You can tell me your symptoms, and I’ll help explain what they could mean. For example, “I have a headache and a sore throat”",
        response:
          " Let’s get started. Just tell me what you’re experiencing and I’ll give you a possible explanation. Please note: This is not a medical diagnosis. For serious or urgent concerns, consult a healthcare professional.",
      },
    ]);
  }, []);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSendClick = async () => {
    options.data.message = inputText;
    try {
      const response = await axios.request(options);
      console.log(response.data);
      setResponse(response.data);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(
        "I am currently experiencing a high number of requests. Please try again later."
      );
    }
    if (error) {
      setConversationHistory([
        ...conversationHistory,
        {
          message: inputText,
          response: error,
        },
      ]);
    } else {
      setConversationHistory([
        ...conversationHistory,
        {
          message: inputText,
          response: response?.result?.response?.message,
        },
      ]);
    }
    setInputText("");
  };

  return (
    <div className="chat-container">
      {conversationHistory.map((message, index) => (
        <div key={index}>
          <div className="message-bubble left">
            <p>{message.message}</p>
          </div>
          <div className="message-bubble right">
            <p>{message.response}</p>
          </div>
        </div>
      ))}
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your question or symptom"
        />
        <button onClick={handleSendClick} style={{ marginLeft: "10px" }}>
          Send
        </button>
      </div>
    </div>
  );
}

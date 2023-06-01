import { useState } from "react";
import ChatBot from "./components/ChatBot";
import LoginPage from "./components/LoginPage";

function App() {
  const [login, setLogin] = useState(true);
  return <div className="App">{login ? <ChatBot /> : <LoginPage />}</div>;
}

export default App;

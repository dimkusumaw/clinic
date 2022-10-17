import { useEffect } from "react";
import "./App.css";
import Header from "./components/Layout/Header";
import Sidebar from "./components/Layout/Sidebar";
import Router from "./routes";

function App() {
  useEffect(() => {
    
  })
  return (
    <div className="w-full flex flex-row">
      <Sidebar />
      <div className="w-full flex flex-col">
        <Header />
        <Router />
      </div>
    </div>
  );
}

export default App;

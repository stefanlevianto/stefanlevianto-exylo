import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import GlobalSidebar from "./components/GlobalSideBar";
import Dashboard from "./Page/Dashboard";



function App() {
  const [isSidebar, setIsSidebar] = useState(true);

  return (
        <div className="app">
          <GlobalSidebar isSidebar={isSidebar} />
          <main className="content">
            <Routes>
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </main>
        </div>
  );
}

export default App;
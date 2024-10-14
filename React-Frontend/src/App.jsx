import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Pages/dashboard";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

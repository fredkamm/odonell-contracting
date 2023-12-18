import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

const App = () => (
  <div className="bg-primary relative min-h-screen">
    <Header />
    <Outlet />
  </div>
);

export default App;
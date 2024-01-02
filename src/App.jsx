import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

const App = () => (
  <div className="bg-secondary relative min-h-screen">
    <div className="py-9">
      <Header />
    </div>
    <Outlet />
    <Footer />
  </div>
);

export default App;

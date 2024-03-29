import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";

import "./App.css";

function App() {
  return (
    <div className="d-flex flex-column App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="App">
      <SideBar />
      <space>
        <Header />
        <MainContent />
      </space>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import HuddleLogo from "./components/HuddleLogo/HuddleLogo";
import Illustration from "./components/Illustration/Illustration";
import Text from "./components/Text/Text";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="app">
      <div className="mainWrapper">
        <HuddleLogo />
      </div>
      <div className="main">
        <Illustration />
        <Text />
      </div>
      <Footer />
    </div>
  );
}

export default App;

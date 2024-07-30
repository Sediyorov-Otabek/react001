import "./App.css";
import Header from "./components/header/navbar";
import Hero from "./components/hero/hero";
import Main from "./components/main/main";
import AboutUs from "./components/about/about";
import Clients from "./components/clientts/clients";
import News from "./components/news/news";
import Signup from "./components/signup/signup";
import Footer from "./components/footer/footer";
function App() {
  let son = 15;
  return (
    <div className="App">
      <Header />
      <Hero />
      <Main />
      <AboutUs />
      <Clients />
      <News />
      <Signup />
      <Footer />
      <h2 className="soon">react app {son}</h2>
    </div>
  );
}

export default App;

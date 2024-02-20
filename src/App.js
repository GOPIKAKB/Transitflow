import Banner from "./Component/Banner/Banner";
import Header from "./Component/Header/Header";
import Menu from "./Component/Menu/Menu";
import Service from "./Component/Service/Service";


function App() {
  return (
    <div className="app">
      <Header />
      <Menu />
      <Banner />
      <Service />
    </div>
  );
}

export default App;

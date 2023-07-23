import Header from "./Layout/Header";
import Main from "./Layout/Main";
import Footer from "./Layout/Footer";


function App() {
  return (
    <div className="flex flex-col justify-between min-h-full">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;

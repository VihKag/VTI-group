
import './App.css';
import ListCategory from './components/ListCategory';
import Banner from './components/Banner';
import ListProduct from './components/ListProduct';
import Blog from './components/Blog';
function App() {
  return (
    
    <div className="App">
      <div className="container-banner">
       <Banner/>
      </div>
      <div className="Categories-list">
       <ListCategory/>
      </div>
      <div className="Pet-list">
        <ListProduct/>
      </div>
       <Blog/>
    </div>
  );
}

export default App;

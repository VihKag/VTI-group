
import './App.css';
import ListCategory from './components/List/ListCategory';
import Banner from './components/Banner/Banner';
import ListProduct from './components/List/ListProduct';
import Blog from './components/Blog/Blog';
import Carousel from './components/Carousel/Carousel';
function App() {
  return (
    
    <div className="App">
       <Banner/>
       <Carousel />
       <ListCategory/>
       <ListProduct 
       title='Cats'
       apiGet='https://run.mocky.io/v3/e6ed40f5-3eff-4002-a8a5-6422536e20d9'/>
       <ListProduct 
       title='Dogs'
       apiGet='https://run.mocky.io/v3/4d058b78-b100-4bf6-9843-05f38b7cfd12'/>
       
       <Blog/>
    </div>
  );
}

export default App;

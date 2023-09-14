
import './App.css';
import ListCategory from './components/ListCategory';
import Banner from './components/Banner';
import ListProduct from './components/ListProduct';
import Blog from './components/Blog';
function App() {
  return (
    
    <div className="App">
       <Banner/>
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

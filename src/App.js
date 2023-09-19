
import './App.css';
import ListCategory from './components/List/ListCategory';
import Banner from './components/Banner/Banner';
import ListProduct from './components/List/ListProduct';
import Blog from './components/Blog/Blog';
import Carousel from './components/Carousel/Carousel';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <>
      <div className="App">
        <Header/>
        <Banner/>
        <Carousel />
        <ListCategory/>
        <ListProduct 
        title='Cats'
        apiGet='cat'/>
        <ListProduct 
        title='Dogs'
        apiGet='dog'/>       
        <Blog/>
        <Footer/>
      </div>
    </>
  );
}

export default App;

import './App.css';
import Header from './components/headers/Header';
import Banner from './components/banner/Banner';
import MainBody from './components/mainbody/MainBody';
import TemplateFeature1 from './components/template/TemplateFeature1';
import TemplateFeature2 from './components/template/TemplateFeature2';
import InnerPages from './components/inner pages/InnerPages';
import Footer from './components/footer/Footer';
function App () {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainBody />
      <TemplateFeature1 />
      <TemplateFeature2 />
      <InnerPages />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Header from './components/Header';
import Gallery from './components/Gallery';

function App() {
  return <div>
  <Gallery  country = "Netherlands" title ="Noche estrellada" img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/la-noche-estrellada1-1586872678.jpg?resize=768:*"/>
  <Gallery  country = "Austria" title ="El beso" img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-beso-1639396100.jpeg?resize=768:*"/>
  <Gallery  country = "France" title ="El almuerzo de los remeros" img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-almuerzo-de-los-remeros-1639395809.jpg?resize=768:*"/>
  <Gallery  country = "Italy" title ="La escuela de Atenas" img = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/elle-escuela-de-atenas-1-1586849897.jpg?resize=768:*"/>
  
  

  </div>;

}

export default App;

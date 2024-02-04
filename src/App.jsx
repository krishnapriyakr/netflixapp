
import './App.css';
import Banner from './Component/Banner';
import Footer from './Component/Footer';
import Nav from './Component/Nav';
import Row from './Component/Row';
import requests from './requests';
function App() {
  return (
    <div className="App">
      <Nav/>
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row isPoster={true} title="NEWLY ADDED MOVIES" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="POPULAR" fetchUrl={requests.fetchTrending} />
      <Row title="FEATURED MOVIES" fetchUrl={requests.fetchTopRated} />
      <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
      <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="ROMANCE MOVIES" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="DOCUMENTAIES" fetchUrl={requests.fetchDocumentaries} />
      <Footer/>
    </div>
  );
}

export default App;

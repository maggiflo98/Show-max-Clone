import './App.css';
import Navbar from "../src/components/Navbar/navbar.component";
import Banner from '../src/components/Banner/banner.component';
import Row from '../src/components/Row/row.component';
import requests from "../src/request";
import Kenyan from "../src/components/Row/kenyan.component";
// import Menu from "../src/components/Menu/menu.component";


function App() {
  return (
    <div className="App">
      {/* <Menu/> */}
      <Navbar/>
      <Banner/>
       <Kenyan/> 
      
     <Row title="Coming soon to showmax"fetchUrl={requests.fetchActionMovies}/>
     <Row title="Comedy" fetchUrl={requests.fetchComedyMovies}/>
     <Row title="Horror" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title="Documentary"fetchUrl={requests.fetchDocumentaries}/>
     <Row title="Action" fetchUrl={requests.fetchTopRated}/>
     <Row title="Romance"fetchUrl={requests.fetchTrending}/>
     <Row title="Sports" fetchUrl={requests.fetchRomanceMovies}/>
     

    </div>
  );
}

export default App;

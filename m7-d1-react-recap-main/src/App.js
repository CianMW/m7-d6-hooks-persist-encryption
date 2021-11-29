import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import MyNavbar from './components/MyNavbar';
import JobSearch from './components/JobSearch';
import CompanyInfo from './components/CompanyInfo';
import { connect } from 'react-redux';
import Favourites from './components/Favourites';


const MapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: () => {
    dispatch({
      type: "INCREMENT"
      })
    }
}) 
function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <MyNavbar/>

      <div className="marginT">
      <Routes >
          <Route path='/' element={<JobSearch />} />
          <Route path='/company/:companyId' element={<CompanyInfo />} />
          <Route path='/favourites' element={<Favourites />} />
          
      </Routes>
      </div>
      
      </BrowserRouter>
      
    </div>
  );
}

export default connect( MapStateToProps, mapDispatchToProps)(App);

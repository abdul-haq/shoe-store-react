import React from "react";
import './App.css'
import Shoess from './shoes.data'
import {
  BrowserRouter as Router,
  Routes,
  Link,
  Route,
  Outlet,
  useParams,
} from "react-router-dom";
import Header from './Header'

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Launch />} >
          <Route path="/" element={<LaunchIndex />} />
          <Route path=":slug" element={<LaunchShoe />} />
        </Route>
      </Routes>
    </Router>
  );
}

function Launch() {
  return (
   
    <div className='container-fluid' style={{backgroundColor:'white',height:"90vh"}}>

   
    <div style={{width:'90%',margin:'auto'}}>
      <div style={{fontFamily: 'Montserrat'}}>
      <br/><br/>
      <Link to="" style={{textDecoration:'none',color:'black',alignContent:'left'}}><h1>Shop</h1></Link>
      <hr/>
      <Outlet />
      </div>
      </div>
      </div>
  );
}
function LaunchIndex() {
  return (
    <center><div className="row">
    {Object.entries(Shoess).map(([slug, { img, name,price }]) => (
      <div className="col-md-4" style={{padding:'10px'}} key={slug}>
       
        <Link to={`/${slug}`}>
          
          <img width="300"  src={img} alt={name} />
        </Link>
        <p> {name}</p>
        <p> {price}</p>
      </div>
    ))}
    <hr/></div></center>
    
    
  );
}
function LaunchShoe() {
  const { slug } = useParams();
  const shoe = Shoess[slug];
  const { name, img ,price} = shoe;
  return (
    <div class="container">
  <div class="row">
    <div class="col" style={{borderRight:'1px solid grey'}}>
    <img src={img} alt={name}  width="400" />
    </div>
    <div class="col" style={{paddingLeft:'80px',paddingTop:'20px'}}>
    <h1> {name} </h1>
    <h1> {price} </h1>
    </div>
  </div>
  
  </div>
    
  );
}

export default App;

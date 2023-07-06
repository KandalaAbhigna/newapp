/* eslint-disable jsx-a11y/anchor-is-valid */
import './App.css';
import SavartLogo from "./Assets/savartlogo.svg"
import graph from './Assets/image 2.png'
import graph2 from './Assets/image1.png'
import './searchbar.css'

function App() {

  return (
    <div className="App"> 
    <div className="navbar">
    {/* display:flex flex-direction: column */}
    <div id="right-nav">
    <img src={SavartLogo}  alt='savartlogo'/>
      <a href='#' >Home</a>
      <a href='#' >Pricing</a>
      <a href='#' >Benefits</a>
      <a href='#' >...</a>   
    </div>
    <div id="left-nav">
    <a href="tel:+91-9573720665">+91-9573720665</a>
    <button class="button rounded-corners" type="button">Get Started</button>
    </div>
    <div >
    </div>
    </div>


    <div className="mainContainer">
       <div className='mainContainer_left'>
        <div>
        <h1>
        Driven by <font color="#0000ffcf">Research</font> Accelerated by <font color="#0000ffcf">AI </font>
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
       </div>
       <div className='mainContainer_right'>
       <div className='circle1'></div>
       <img src={graph} alt='graph'/>
       <img src={graph2} alt='graph2'/>
       </div>
    </div>


    <div className='searchbar'>
    <form action="/action_page.php">
      <input type="text" placeholder="Search.." name="searchstock"/>
      <button type="submit"></button>
    </form>
    </div>


<div>
  <div className='row1'><h2>Currently Trending</h2>
  
  </div>
    <div className='row2'><h2>Your Bookmarks</h2></div>
    <div className='row3' ><h2>Resently Viewed</h2></div>


  
  </div>
    </div>
  );
}

export default App;

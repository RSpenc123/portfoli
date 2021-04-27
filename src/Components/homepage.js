import React from 'react';
// import './App.css';
import {Link, withRouter} from "react-router-dom"

function App() {
  return (
    <body className="App">
    {/* <header className="header">pp</header> */}
    <section className="title">
      <div className="box">
      <h1 className="name">REID SPENCER</h1>
      <p className="developer">FULL-STACK WEB DEVELOPER</p>
      </div>
    </section>
    <section className="section-header"> 
    <b className="projects">PROJECTS</b></section>
    <div className="background"></div>
    
    <section className="background">
    <div className="work">
<div className="website">
  <h1 className="website-name">Coding Oc</h1>
 <img className="website-image" src="https://i.imgur.com/3HQqNuh.png"/>
  <div className="website-status-online"> 
  <p className="f">Online</p></div>
</div>
<div  className="website">
  <h1 className="website-name">Artistry</h1>
  <Link to="/Artistry"> <img className="website-image" src="https://i.imgur.com/6Ye5lJK.png"/> </Link> 
  <div className="website-status-offline"> 
  <p className="f">Temporarily Offline</p> </div> 
 
</div>
<div className="website">
  <h1 className="website-name">Docs</h1>
  <Link to="/book"><img className="website-image"   src="https://i.imgur.com/X9mSpb3.png"/> </Link>
  <div className="website-status-offline"> 
  <p className="f">Temporarily Offline</p></div>
</div>



    </div>
    <div className="work">
<div className="website">
  <h1 className="website-name">Kinetic Blu</h1>
 <img className="website-image" src="https://i.imgur.com/3iizxqs.png"/>
  <div className="website-status-wip"> 
  <p className="f">In Progress</p></div>
</div>
<div  className="website">
  <h1 className="website-name">Bookshelf</h1>
 <img className="website-image" src="https://i.imgur.com/gspVndO.png"/>
  <div className="website-status-wip"> 
  <p className="f">In Progress</p></div>
</div>




    </div>
    </section>

    </body>
  );
}

export default App;

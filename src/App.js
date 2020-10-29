import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    {/* <header className="header">pp</header> */}
    <body className="title">
      <div className="box">
      <h1 className="name">REID SPENCER</h1>
      <p className="developer">FULL-STACK WEB DEVELOPER</p>
      </div>
    </body>
    <section className="section-header"> 
    <b className="projects">PROJECTS</b></section>
    <div className="work">
<div className="website">
  <h1 className="website-name">Coding Oc</h1>
 <img className="website-image" src="https://squidslippers.com/static/media/Jiffy1.4f0d8bce.PNG"/>
  <div className="website-status-online"> 
  <p className="f">Online</p></div>
</div>
<div className="website">
  <h1 className="website-name">Coding Oc</h1>
 <img className="website-image" src="https://squidslippers.com/static/media/Jiffy1.4f0d8bce.PNG"/>
  <div className="website-status-online"> 
  <p className="f">Online</p></div>
</div>
<div className="website">
  <h1 className="website-name">Coding Oc</h1>
 <img className="website-image" src="https://squidslippers.com/static/media/Jiffy1.4f0d8bce.PNG"/>
  <div className="website-status-offline"> 
  <p className="f">Temporarily Offline</p></div>
</div>


    </div>
    </div>
  );
}

export default App;

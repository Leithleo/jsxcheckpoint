import React from 'react'
import './App.css';

import Mercedesimage from './mercedes-benz-g-class.png'


function App() {

  const name = "Mercedes-Benz"
  const myStyle = {
    color: "blue"
  }

  return (

    
    <div className="App">
      <p className="test-paragraph">Mercedes-Benz The Best Or Nothing</p>

      {/* use expression to view data */}
      <p style={{ color: "white", margin: "0 30%", backgroundColor: "" }}>{name}</p>
      <p style={myStyle}>{2 * 5}</p>

      {/* Closing tags */}
      <hr style={{ width: "50%" }} />

      {/* Warning without the "alt" prop of "img" tag */}
      <img
        className="react-logo"
        src="https://www.tuningblog.eu/wp-content/uploads/2020/12/SCL-Global-Concept-Diamant-GT-Mercedes-AMG-GT-63-S-X290-Tuning-18.jpg"
        alt="Mercedes"
      />
      <br />

      {/* importing images */}
      <img src="Mercedes-benz-gle.jpg" alt="" style={{ width: "30%" }} />
      <br /><br /><br />
      <img src={Mercedesimage} alt="" style={{ width: "30%" }} />
    </div>


 
  );
}

export default App;
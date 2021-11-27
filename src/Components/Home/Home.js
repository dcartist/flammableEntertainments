import React, { Component } from 'react';
import Showcase from "../Episodes/EpisodeShowcase"
import shows from "../../data/shows.json"

class Home extends Component {
   
    render() {
        const divBackground={
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/drinks.jpg)`
        }
        return (
            <div>
                <div className="homeBase" style={divBackground}>
                <div className="homeBackground"></div>
                </div>
                <section id='things' className="tester">
                <h2>Things</h2>
                    {shows.map((item, index) =>  <Showcase {...item} key={index}></Showcase>)}
                    
      
    </section>
    <div id="home" style={{height: 500}}>
          <h1>This is Home section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="about" style={{height: 500}}>
        <h1>This is About section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="contact" style={{height: 500}}>
        <h1>This is Contact section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
        <div id="service" style={{height: 500}}>
        <h1>This is Service section</h1>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, repellendus. Totam nihil similique a repellat minus dolor amet quasi. Corporis nulla quaerat iste, sed quasi ab dolorem maxime minima animi.
        </div>
    <div id="thistest" className="tester">
            something to test out
    </div>
    <section id='stuff' className="tester">
        <p>SOMETIMG</p>
      <h2>Stuff</h2>
    </section>
                    {/* <img src={process.env.PUBL
                        IC_URL + '/images/flammablehorizon_cropped.gif'} />  */}
            </div>
        );
    }
}

export default Home;
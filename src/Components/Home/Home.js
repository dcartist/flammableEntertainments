import React, { Component } from 'react';

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
    </section>
    <section id='stuff' className="tester">
      <h2>Stuff</h2>
    </section>
                    {/* <img src={process.env.PUBL
                        IC_URL + '/images/flammablehorizon_cropped.gif'} />  */}
            </div>
        );
    }
}

export default Home;
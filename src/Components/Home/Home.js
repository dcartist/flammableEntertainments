import React, { Component } from 'react';

class Home extends Component {
   
    render() {
        const divBackground={
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/drinks.jpg)`
        }
        return (
            <div className="homeBase" style={divBackground}>
                
                <div className="homeBackground"></div>
             
                    {/* <img src={process.env.PUBL
                        IC_URL + '/images/flammablehorizon_cropped.gif'} />  */}
            </div>
        );
    }
}

export default Home;
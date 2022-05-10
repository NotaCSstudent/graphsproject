import React from "react";

import pics from '../assets/an-efficient-brain.webp'

import pic2 from '../assets/NeuralNetwork.png'
import { Bounce } from "react-reveal";

export const Welcome = () =>
{

    return(
        <div>
              
            <div className="box3">
                <Bounce>
            <h1>Graph Theory in the brain.</h1>
            <h1>

            </h1>
            <br/>
            <img src={pics}/>
            <img src={pic2}/>

           </Bounce>
            </div>
            


        </div>
    );



}
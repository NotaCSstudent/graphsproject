
import React from 'react'
import pics from '../assets/Brainstruct.png'
import pics2 from '../assets/an-efficient-brain.gif'


export const HumanMemory = () =>
{
    return (
        <div className='container'>
          <div className='box'>
            <div className='content'>
          <h1>Human Memory and graphs</h1>
         
            
    
          <h2>Each Node in our brain is a piece of our memory, and each weight would represent how strong your memory is. </h2>
    
    
            <h2>
            <ul>
              
             
              <li>Green will be something you can remember instantly.</li>
             
              <li> Yellow is memory that will take some time to remember.</li>
             
              <li> Red is a memory that can't be obtained, it's something you forgot.</li>
              </ul>
              </h2>
            <h3>
              <li>1. Playing  Video games is one example of having strong nodes.</li>
              <li>2. Coding is an example where it can be in the middle</li>
              <li>3. Math formulas are a way where it can be a weak or deleted node</li>
            
            </h3>
            <div className='smallbox'>
              <div className='grid'>
            <img src={pics}/>
            <img src={pics2}/>
            </div>
            </div>
            </div>
            
            </div>
    </div>
            
    
      );
}




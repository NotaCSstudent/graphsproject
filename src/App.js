import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import './index.css'
import { Description } from './pages/Describe';
import {DisGraph} from './pages/Graphs';
import { Why } from './pages/Why';
import Gramphs from './pages/GraphDetail';
import { HumanMemory } from './pages/HumanMemory'
import { CrucialGraph } from './pages/CrucialGraph';
import { Fade } from 'react-reveal';
import {Welcome} from './pages/Welcome'






const App = () => {
  return (
    <div>
      <head>
        <title> Graph Brain</title>
      </head>
      <div className='container'>

        <div className='section'>
        <Welcome />
        </div>

          <div className='section'>
            <Fade>
            <Description />
            </Fade>
          </div>
          <div className='section'>
          <Fade>
          <Why />
          </Fade>
          </div>
          <div className='section'>
          <Fade>
            <Gramphs />
            </Fade>
            </div>
            <div className='section'>
              <Fade>
              <HumanMemory />
              </Fade>
            </div>
            <div className='section'>
              <CrucialGraph />
            </div>
            
        </div>
    </div>
  )
}


export default App;

import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import './index.css'
import { Description } from './pages/Describe';
import {DisGraph} from './pages/Graphs';
import { Why } from './pages/Why';
import Gramphs from './pages/GraphDetail';
import { HumanMemory } from './pages/HumanMemory'
import { CrucialGraph } from './pages/CrucialGraph';







const App = () => {
  return (
    <div>
      <div className='container'>



          <div className='section'>
            <Description />
          </div>
          <div className='section'>
           
          <Why />
          </div>
          <div className='section'>
            <Gramphs />
            <DisGraph />
            </div>
            <div className='section'>
              <HumanMemory />

            </div>
            <div className='section'>

              <CrucialGraph />
            </div>
            
        </div>
    </div>
  )
}


export default App;

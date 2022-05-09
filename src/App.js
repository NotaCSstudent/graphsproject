import React, { useEffect } from 'react'
import G6 from '@antv/g6';
import './index.css'
import { Description } from './pages/Describe';
import {DisGraph} from './pages/Graphs';









const App = () => {
  return (
    <div>
      <div className='container'>



          <div className='section'>
            <Description />
          </div>
          <div className='section'>
            <DisGraph />

          </div>
        </div>
    </div>
  )
}


export default App;

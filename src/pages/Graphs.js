import React, { useEffect } from 'react'
import G6 from '@antv/g6';
const data = require('./data.json')
const datastuff = require('./datastuff.json')















export const DisGraph = () => {
    const ref = React.useRef(null)
    let graph = null
  
    useEffect(() => {
      if(!graph) {
        
        const minimap = new G6.Minimap()
  
        
        graph = new G6.Graph({
          container: ref.current,
          width: 700,
          height: 400,
          plugins: [minimap],
          modes: {
            default: ['drag-canvas', 'zoom-canvas','drag-node', 'drag-edge'],
          },
          defaultNode: {
            type: 'circle',
            labelCfg: {
              style: {
                fill: '#000000A6',
                fontSize: 10
              }
            },
            style: {
              stroke: '#72CC4A',
              width: 150
            }
          },
          defaultEdge: {
            type: 'line'
          },
          layout: {
            type: 'concentric',
            maxLevelDiff: 0.5,
            sortBy: 'degree',
          },
          nodeStateStyles: {
            hover: {
              stroke: 'red',
              lineWidth: 3
            }
          },
          edgeStateStyles: {
            hover: {
              stroke: 'blue',
              lineWidth: 3
            }
          }
        })
      }
      
      graph.data(data)
    
      graph.render()
  
      graph.on('node:mouseenter', evt => {
        graph.setItemState(evt.item, 'hover', true)
      })
  
      graph.on('node:mouseleave', evt => {
        graph.setItemState(evt.item, 'hover', false)
      })
  
      graph.on('edge:mouseenter', evt => {
        graph.setItemState(evt.item, 'hover', true)
      })
  
      graph.on('edge:mouseleave', evt => {
        graph.setItemState(evt.item, 'hover', false)
      })
  
    }, [])
  
    return <div ref={ref}></div>
  }

import pic from '../assets/fnins-13-00585-g004.jpeg'
import { Fade } from 'react-reveal';
export function Why()
{
  return (
    <div>
      <div className='container'>
        <Fade top>
        <div className='box'>
        <div className='content'>
      <h1>We can use graph theory to explore the brain</h1>
      
        <h2>
          Why?
        </h2>
        <p>
          We can model the brain more easily using graph theory.
          By doing that, we can easily explore the brain.

          <br/>
          <br/>
          </p>

          
          <h1>
            What type of graph can we use?
          </h1>
          
            <h2>
              Directed graph (DG)
            </h2>
            <p>
              We can use various different types of graphs, but for our use case we will use a directed graph.
              <br/>
            
              </p>
            
              <img src={pic}/>
              
              </div>
              </div>
              </Fade>
              </div>
      </div>
  );

}
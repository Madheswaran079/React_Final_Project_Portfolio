import React, {useState} from 'react';
import ProductCard from './displayProject';
import '../projects.css';

function Projects(props)
{
    const [products, setProducts] = useState([
        {
          id: 1,
          img:'https://rb.gy/vh78w',
          title: 'Bajaj Auto',
          url:'https://bajaj-auto.netlify.app/' ,
        },
        {
          id: 2,
          img:'https://rb.gy/4rhar',
          title: 'Wikipedia Viewer',
          url:'https://madheswaran079.github.io/Wikipedia-Viewer',
        },
        {
          id: 3,
          img:'https://rb.gy/ye2vd',
          title: 'Js Clock',
          url:'https://madheswaran079.github.io/Clock',
        },
        {
          id: 4,
          img:'https://rb.gy/tw8ch',
          title: 'Weather Report',
          url:'https://madheswaran079.github.io/Weather-Report',
        }
      ]);
    
    return(
        <div id='projects'>
            <h1>Projects</h1>
            <div id='display' style={{ display: 'flex', flexWrap: 'wrap', alignItems:'center', justifyContent:'center'}}>
              {products.map((product) => (
              <div key={product.id} style={{ margin: 10 }}>
              <ProductCard product={product} />
              </div>
              ))}
            </div>
        </div>
    );
}

export default Projects;
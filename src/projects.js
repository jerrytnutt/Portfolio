import React, { useState, useEffect } from 'react';
import {FaGithub} from "react-icons/fa"
import {BiLayout} from "react-icons/bi"
import react from './images/react.png';
import javascript from './images/javascript.png';
import sass from './images/sass.png';
import webpack from './images/webpack.png';
import memorycardtwo from './images/memorycardtwo.png'
import natsattwo from './images/natsattwo.png'
import cvbuilder from './images/cvbuilder.png'
import seafoodtwo from './images/seafoodtwo.png'
import {debounce} from 'lodash'
import batttleship from './images/battleship.png'
import testing from './images/testing.png';
import python from './images/python.png';
import notepad from './images/notepad.png';

// icons require links

//<img src={currentMoon.img} alt='new' ></img> 
//import img1 from '../images/callisto.jpg';
//H 250 W 505
// FIX CROPPING ON IMAGES
const Projects = (props) => {
    const [displayMode,setDisplayMode] = useState('block')
    
    useEffect(() => {
      const handleResize = debounce(() => {
        if (window.innerWidth < 1200){
          return setDisplayMode('none')
        
        }
        setDisplayMode('block') 
        },100)
        window.addEventListener('resize', handleResize)
        });
      
    return ( 
    <div className='projectContainer'>
      <div className='project'>
        <img style={{display :displayMode}} className='one' src={batttleship} alt="Italian Trulli"></img>
        <h2>Battleship</h2>
         <div className='description'>
           Battleship strategy game created with Javascript and tested with Jest.
         </div>
         <div className='gitContainer'>
         <img className='logo' src={testing} alt='new'></img>
         <img className='logo' src={javascript} alt='new'></img>
         <img className='logo' src={react} alt='new' ></img>
         </div>
         
         <div className='gitContainer'>  <div>
         <a href="https://github.com/jerrytnutt/Battleship" target="_blank" rel="noreferrer"><FaGithub/><p>Github Repo</p></a></div>
         
         <div><a href="https://jerrytnutt.github.io/Battleship/" target="_blank" rel="noreferrer"><BiLayout/><p>Live Demo</p></a></div> </div>

        </div>

       <div className='project'>
         <img style={{display :displayMode}} className='one' src={natsattwo} alt="Italian Trulli"></img>
         <h2>Shopping Cart</h2>
         <div className='description'>
           An ecommerce shopping cart site. This project was created with ReactJS and takes advantage of React Hooks.
         </div>
         <div className='gitContainer'>
         <img className='logo' src={javascript} alt='new'></img>
         <img className='logo' src={react} alt='new' ></img>
         <img className='logo' src={sass} alt='new' ></img>
         </div>
         
         <div className='gitContainer'>  <div>
         <a href="https://github.com/jerrytnutt/shopping-cart" target="_blank" rel="noreferrer"><FaGithub/><p>Github Repo</p></a></div>
         
         <div><a href="https://jerrytnutt.github.io/shopping-cart/#/" target="_blank" rel="noreferrer"><BiLayout/><p>Live Demo</p></a></div> </div>

        </div>

        <div className='project'>
         <img style={{display :displayMode}} className='one' src={notepad} alt="Italian Trulli"></img>
         <h2>Notepad Tkinter Recreation</h2>
         <div className='description'>
           A complete recreation of Microsoft Notepad with Tkinter with all the features included.
         </div>
         <div className='gitContainer'>
         <img className='logo' src={python} alt='new'></img>
         </div>
         
         <div className='gitContainer'>  <div>
         <a href="https://github.com/jerrytnutt/Notepad-Tkinter-Recreation" target="_blank" rel="noreferrer"><FaGithub/><p>Github Repo</p></a></div>
         
         
         </div>

        </div>

        <div className='project'>
         <img style={{display :displayMode}} className='one' src={memorycardtwo} alt="Italian Trulli"></img>
         <h2>Memory Card Game</h2>
         <div className='description'>
         Memory Game created with ReactJS, This project combines the use of hooks, state and functional components.
         </div>
         <div className='gitContainer'>
         <img className='logo' src={javascript} alt='new'></img>
         <img className='logo' src={react} alt='new' ></img>
        
         </div>
         
         <div className='gitContainer'>  <div>
         <a href="https://github.com/jerrytnutt/Memory-Card-React" target="_blank" rel="noreferrer"><FaGithub/><p>Github Repo</p></a></div>
         
         <div><a href="https://jerrytnutt.github.io/Memory-Card-React/" target="_blank" rel="noreferrer"><BiLayout/><p>Live Demo</p></a></div> </div>

        </div>

        <div className='project'>
         <img style={{display :displayMode}} className='one' src={cvbuilder} alt="Italian Trulli"></img>
         <h2>C.V Application</h2>
         <div className='description'>
         C.V Application created with ReactJS, application makes use of React's states, props and components.
         </div>
         <div className='gitContainer'>
         <img className='logo' src={javascript} alt='new'></img>
         <img className='logo' src={react} alt='new' ></img>
         </div>
         
         <div className='gitContainer'>  <div>
         <a href="https://github.com/jerrytnutt/CV-React-Project" target="_blank" rel="noreferrer"><FaGithub/><p>Github Repo</p></a></div>
         
         <div><a href="https://jerrytnutt.github.io/CV-React-Project/" target="_blank" rel="noreferrer"><BiLayout/><p>Live Demo</p></a></div> </div>

        </div>

        <div className='project'>
         <img style={{display :displayMode}} className='one' src={seafoodtwo} alt="Italian Trulli"></img>
         <h2>Restaurant Page</h2>
         <div className='description'>
         Restaurant Website Project part of the Odin Project curriculum. 
         Created useing Webpack and ES6 Modules. 
         </div>
         <div className='gitContainer'>
         <img className='logo' src={javascript} alt='new'></img>
         <img className='logo' src={webpack} alt='new' ></img>
         </div>
         
         <div className='gitContainer'>  <div>
         <a href="https://github.com/jerrytnutt/Restaurant-Page" target="_blank" rel="noreferrer"><FaGithub/><p>Github Repo</p></a></div>
         
         <div><a href="https://jerrytnutt.github.io/Restaurant-Page/" target="_blank" rel="noreferrer"><BiLayout/><p>Live Demo</p></a></div> </div>

        </div>

       <div className='project'>
         <div className="moreLink">
          <p>See More At </p> <a href="https://github.com/jerrytnutt" target="_blank" rel="noreferrer"><FaGithub/></a>
           </div></div>
    </div>
    
    )
}
export default Projects
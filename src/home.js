import React, { useState, useEffect } from 'react';
import {FaPython, FaHtml5, FaSass,FaGitAlt} from "react-icons/fa"
import {SiJavascript} from "react-icons/si"
import {GrReactjs} from "react-icons/gr"
import {IoLogoCss3} from "react-icons/io"

const Home = (props) => {
    const [binaryMessage,setbinaryMessage] = useState("01001000 01100101 01101100 01101100 01101111 00100001")
    
    useEffect(() => {
      setTimeout(() =>{
        setbinaryMessage('Hello!')
      },5000)
      });

return ( 
  <div className='homeContainer'>
    <div className='image'>
      <div className="frame"></div>
    </div>
    <div className='information'>
      <h1>HI! I'm Jerry Taylor Nutt.</h1>
      <h3>{binaryMessage}</h3>
      <p className='intro'>I am an enthusiastic developer with an interest in Full Stack Web Development and much more!  </p>
     <div className='iconContainer'>
      <div><div className='img'><FaHtml5/></div><p>HTML-5</p></div>
      <div><div className='img'><IoLogoCss3/></div><p>CSS-3</p></div>
      <div><div className='img'><SiJavascript/></div><p>JavaScript</p></div>
      <div><div className='img'><FaSass/></div><p>SASS</p></div>
      <div><div className='img'><FaPython/></div><p>Python</p></div>
      <div><div className='img'><GrReactjs/></div><p>React</p></div>
      <div><div className='img'><FaGitAlt/></div><p>Git</p></div>
     </div>
    </div>
  </div>
    )
}
export default Home
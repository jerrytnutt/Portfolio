import './App.css';
import { useState, useEffect } from 'react';
import { FaPython, FaHtml5, FaSass, FaGitAlt } from 'react-icons/fa';
import { SiJavascript, SiFirebase } from 'react-icons/si';
import { GrReactjs } from 'react-icons/gr';
import { IoLogoCss3 } from 'react-icons/io';
import { FaGithub } from 'react-icons/fa';
import { BiLayout } from 'react-icons/bi';
import react from './images/react.png';
import kanbanImg from './images/kanbanImg.png';
import invoiceImg from './images/invoiceImg.png';
import firebase from './images/firebase.png';
import batttleship from './images/battleship.png';
import python from './images/python.png';
import notepad from './images/notepad.png';

function App() {
  // test change
  const [binaryMessage, setbinaryMessage] = useState(
    '01001000 01100101 01101100 01101100 01101111 00100001'
  );
  const [displayMode, setDisplayMode] = useState('block');

  useEffect(() => {
    setTimeout(() => {
      setbinaryMessage('Hello!');
    }, 5000);
  });
  return (
    <div className="App">
      <div className="homeContainer">
        <div className="image">
          <div className="frame"></div>
        </div>
        <div onClick={setDisplayMode} className="information">
          <h1>HI! I'm Jerry Taylor Nutt.</h1>
          <h3>{binaryMessage}</h3>
          <p className="intro">
            I am an enthusiastic developer with an interest in Full Stack Web
            Development and much more!{' '}
          </p>
          <div className="iconContainer">
            <div>
              <div className="img">
                <FaHtml5 />
              </div>
              <p>HTML-5</p>
            </div>
            <div>
              <div className="img">
                <IoLogoCss3 />
              </div>
              <p>CSS-3</p>
            </div>
            <div>
              <div className="img">
                <SiJavascript />
              </div>
              <p>JavaScript</p>
            </div>
            <div>
              <div className="img">
                <FaSass />
              </div>
              <p>SASS</p>
            </div>
            <div>
              <div className="img">
                <FaPython />
              </div>
              <p>Python</p>
            </div>
            <div>
              <div className="img">
                <GrReactjs />
              </div>
              <p>React</p>
            </div>
            <div>
              <div className="img">
                <FaGitAlt />
              </div>
              <p>Git</p>
            </div>
            <div>
              <div className="img">
                <SiFirebase />
              </div>
              <p>Firebase</p>
            </div>
          </div>
        </div>
      </div>

      <div className="projectContainer">
        <div className="project">
          <img
            style={{ display: displayMode }}
            className="photo"
            src={kanbanImg}
            alt="Italian Trulli"
          ></img>
          <h2>Kanban Task Manager</h2>
          <div className="description">
            Kanban task manager site built with React and Firebase.
          </div>
          <div className="gitContainer">
            <img className="logo" src={react} alt="new"></img>
            <img className="logo" src={firebase} alt="new"></img>
          </div>

          <div className="gitContainer">
            {' '}
            <div>
              <a
                href="https://github.com/jerrytnutt/Kanban-Task-Manager"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <p>Github Repo</p>
              </a>
            </div>
            <div>
              <a
                href="https://jerrytnutt.github.io/Kanban-Task-Manager/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLayout />
                <p>Live Demo</p>
              </a>
            </div>{' '}
          </div>
        </div>

        <div className="project">
          <img
            style={{ display: displayMode }}
            className="photo"
            src={invoiceImg}
            alt="Italian Trulli"
          ></img>
          <h2>Invoice</h2>
          <div className="description">
            Invoice website created with React and Firebase.
          </div>
          <div className="gitContainer">
            <img className="logo" src={react} alt="new"></img>
            <img className="logo" src={firebase} alt="new"></img>
          </div>

          <div className="gitContainer">
            {' '}
            <div>
              <a
                href="https://github.com/jerrytnutt/Invoice-App"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <p>Github Repo</p>
              </a>
            </div>
            <div>
              <a
                href="https://jerrytnutt.github.io/Invoice-App/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLayout />
                <p>Live Demo</p>
              </a>
            </div>{' '}
          </div>
        </div>

        <div className="project">
          <img
            style={{ display: displayMode }}
            className="photo"
            src={notepad}
            alt="Italian Trulli"
          ></img>
          <h2>Notepad Tkinter Recreation</h2>
          <div className="description">
            A complete recreation of Microsoft Notepad useing Tkinter with
            original features included.
          </div>
          <div className="gitContainer">
            <img className="logo" src={python} alt="new"></img>
          </div>

          <div className="gitContainer">
            {' '}
            <div>
              <a
                href="https://github.com/jerrytnutt/Notepad-Tkinter-Recreation"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <p>Github Repo</p>
              </a>
            </div>
          </div>
        </div>
        <div className="project">
          <img
            style={{ display: displayMode }}
            className="photo"
            src={batttleship}
            alt="Italian Trulli"
          ></img>
          <h2>Battleship</h2>
          <div className="description">Battleship game recreation.</div>
          <div className="gitContainer">
            {' '}
            <div>
              <a
                href="https://github.com/jerrytnutt/Battleship"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
                <p>Github Repo</p>
              </a>
            </div>
            <div>
              <a
                href="https://jerrytnutt.github.io/Battleship/"
                target="_blank"
                rel="noreferrer"
              >
                <BiLayout />
                <p>Live Demo</p>
              </a>
            </div>{' '}
          </div>
        </div>

        <div className="project">
          <div className="moreLink">
            <p>See More At </p>{' '}
            <a
              href="https://github.com/jerrytnutt"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

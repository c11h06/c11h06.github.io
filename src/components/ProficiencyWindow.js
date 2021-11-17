import { React } from 'react';
import Draggable from 'react-draggable';
import {Window, WindowContent, WindowHeader, Button, Progress} from 'react95';

function makePWInvisible(e) {
  e.preventDefault();
  const window = document.getElementsByClassName('window2');
  window.item(0).style.display = 'none';
}

export function makePWVisible(e) {
  e.preventDefault();
  const window = document.getElementsByClassName('window2');
  window.item(0).style.display = 'initial';
}

export const ProficiencyWindow = () => (
  <>
  <Draggable >
    <Window className='window2'
      style={{
        width: 600,
        maxWidth: '94%',
        maxHeight: '100%',
        minHeight: 250,
        position: 'fixed',
        top: '35%',
        left: '29%',
        transform: 'translate(-50%, -50%)',
        display: 'visible'
      }}>
      <WindowHeader className='window-header'>
        <span>proficiences.exe</span>
        <Button onClick={makePWInvisible} style={{
          left: '73%'
        }}>
          <span className='close-icon'>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <p>React/JavaScript(ES6): 
        <Progress value='85'>
        </Progress></p>
        <p>Redux/PostgreSQL/Bootstrap:  
        <Progress value='80'>
        </Progress></p>
        <p>Python/Node/Flask/jQuery/Git: 
        <Progress value='75'>
        </Progress></p>
      </WindowContent>
    </Window>
    </Draggable>
  </>
);
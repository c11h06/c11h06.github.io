import { React } from 'react';
import Draggable from 'react-draggable';
import {Window, WindowContent, WindowHeader, Button} from 'react95';

function makeInvisible(e) {
  e.preventDefault();
  const window = document.getElementsByClassName('window');
  window.item(0).style.display = 'none';
}

export function makeVisible(e) {
  e.preventDefault();
  const window = document.getElementsByClassName('window');
  window.item(0).style.display = 'initial';
}

export const IntroWindow = () => (
  <>
  <Draggable >
    <Window className='window'
      style={{
        width: 600,
        maxWidth: '94%',
        maxHeight: '100%',
        minHeight: 250,
        position: 'fixed',
        top: '30%',
        left: '24%',
        transform: 'translate(-50%, -50%)',
        display: 'visible'
      }}>
      <WindowHeader className='window-header'>
        <span>intro.exe</span>
        <Button onClick={makeInvisible} style={{
          left: '83%'
        }}>
          <span className='close-icon'>x</span>
        </Button>
      </WindowHeader>
      <WindowContent>
        <p>
          Hi! I'm Christian Hodges, and welcome to my site! Take a look at my <a style={{ color: 'blue' }} rel='noreferrer' target='_blank' href='https://www.linkedin.com/in/christianchodges/'>LinkedIn</a>, sneak in a game of Concentration, or shoot me an email - whatever floats your boat!</p>
        <br>
        </br>
        <p>Thanks to the team at <a style={{color: 'blue'}} rel='noreferrer' target='_blank' href='https://react95.io/#'>React95 </a> for their awesome library. I couldn't have built the site without it. Check them out!</p>
        <br></br>
        <p> Thanks for stopping by!
        </p>
      </WindowContent>
    </Window>
    </Draggable>
  </>
);
import React from 'react';
import { AppBar, Toolbar, TextField, Button, List, ListItem, Divider} from 'react95';
import {makeVisible} from './IntroWindow.js';
import {makePWVisible} from './ProficiencyWindow';

export const DefaultAppBar = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <AppBar>
      <Toolbar style={{ justifyContent: 'space-between' }}>
        <div style={{ position: 'relative', display: 'inline-block' }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: 'bold' }}
          >
            Start
          </Button>
          {open && (
            <List
              style={{
                position: 'absolute',
                left: '0',
                top: '100%'
              }}
              onClick={() => setOpen(false)}
            >
              <ListItem as='a' href='' onClick={makeVisible}>
                <span role='img' aria-label='🙋🏽‍♂️'>
                🙋🏽‍♂️
                </span>
                About Me
              </ListItem>
              <ListItem as='a' href='' onClick={makePWVisible}>
                <span role='img' aria-label='💻'>
                💻
                </span>
                Proficiencies
              </ListItem>
              <ListItem as='a' href='https://c11h06.github.io/memorygame/' target='_blank'>
                <span role='img' aria-label='🕹'>
                🕹
                </span>
                Play Concentration!
              </ListItem>
              <ListItem as='a' href='https://www.linkedin.com/in/christianchodges/' target='_blank'>
                <span role='img' aria-label='📧'>
                  📧
                </span>
                My LinkedIn
              </ListItem>
              <Divider />
              <ListItem disabled>
                <span role='img' aria-label='🔙'>
                  🔙
                </span>
                Logout
              </ListItem>
            </List>
          )}
        </div>

        <TextField placeholder='Search...' width={150} />
      </Toolbar>
    </AppBar>
  );
};
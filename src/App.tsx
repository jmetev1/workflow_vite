import { Card, majorScale, Pane } from 'evergreen-ui';
import { Outlet } from 'react-router-dom';
import { Nav } from './Nav';

export default () => (
  <div style={{
    position: 'fixed',
    width: '100%',
  }}>
    <Pane height='80vh' width='100%' >
      <Nav />
      <Pane display='flex' height='100%'>
        <Card
          marginX={majorScale(2)}
          width='90%'
          height='90%'
          margin='auto'
          elevation={3}
          border
        >
          <Card margin={majorScale(6)} display='flex'  >
            <Outlet />
          </Card>
        </Card>
      </Pane>
    </Pane>
  </div >
);
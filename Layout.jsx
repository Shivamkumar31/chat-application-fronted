

import React from 'react';
import Topnav from './Topnav';
import Registration  from './Registration';

const Layout = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      minHeight: '100vh',
      backgroundColor: '#ffae01',
      backgroundImage: 'url(https://dashboard.codeparrot.ai/api/image/Z9r0qyppvFKitUeD/dust.png)',
      backgroundSize: 'cover',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Topnav style={{ flexGrow: 1, width: '100%', height: 'auto' }} /> 
      <Registration style={{ flexGrow: 1, width: 'auto', height: 'auto' }} />
    </div>
  );
};

export default Layout;

